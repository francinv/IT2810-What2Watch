import { FunctionComponent, useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { styled } from "@mui/material/styles";   
import Button, { ButtonProps } from '@mui/material/Button';
import { selectNextPage, selectFilterSearch, selectFilterGenre, selectFilterDateStart, selectFilterDateEnd, selectStateExceptMovies } from '../../pages/selectors';
import { useAppDispatch } from "../../services/hooks"
import { Dispatch } from "redux";
import MovieService from "../../services/index";
import { getAllMovies } from "../../services/__generated__/getAllMovies"
import { useSelector } from "react-redux"
import { setMovies, emptyMovies, setFilterEndDate, setFilterStartDate } from "../../pages/mainPageSlice"

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: getAllMovies["getAllMovies"]) => dispatch(setMovies(movies)),
  setStateStartDate: (year: number) => dispatch(setFilterStartDate(year)),
  setStateEndDate: (year: number) => dispatch(setFilterEndDate(year)),
  emptyMovies: () => dispatch(emptyMovies())
});

export const FilterByYear: FunctionComponent = () => { 

  const { setMovies, emptyMovies, setStateStartDate, setStateEndDate } = actionDispatch(useAppDispatch())

  const state = useSelector(selectStateExceptMovies)

  const fetchMovies = async () => {
    emptyMovies();
    const movies = await MovieService.getMoviesBySearch(state).catch((error) => {
      console.log("Error", error);
    });
    if(movies) {
      setMovies(movies);
    }
  }

  function convertUnixDateToDate(unixNumber: number) {
    const date = new Date(unixNumber * 1000);
    //console.log(date.getFullYear());
    return date;
  }
  function convertDateToUnixDate(date: Date) {
    const unixTimeStamp = date.getTime() / 1000;
    return unixTimeStamp;
  }
  
  const FilterButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#cccccc',
      color:'#000'
    },
  }));

  function setStartYear(year: number | null) {
    if (year !== null) {setStateStartDate(convertDateToUnixDate(new Date(year, 0)));}
    
  }
  function setEndYear(year: number | null) {
    if (year !== null) {setStateEndDate(convertDateToUnixDate(new Date(year, 0)));}
  }

  return (
    <>
      <Box sx={{display:'flex'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns} > 
          <DatePicker
            views={['year']}
            label='From year'
            value={2021}
            onChange={(newValue) => {
              setStartYear(newValue);
            }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
            className='date-picker-class'
          />
          <DatePicker
            views={['year']}
            label='To year'
            value={2021}
            onChange={(newValue) => {
              setEndYear(newValue);
            }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
            className='date-picker-class'
          />
        </LocalizationProvider>
      </Box>
      <div className="button-container">
        <FilterButton variant="contained" endIcon={<MovieCreationOutlinedIcon/>}>Filter</FilterButton>
      </div>
    </>
  );
};
