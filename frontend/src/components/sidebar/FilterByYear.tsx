import { FunctionComponent, useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { styled } from "@mui/material/styles";   
import Button, { ButtonProps } from '@mui/material/Button';

export const FilterByYear: FunctionComponent = () => {
  const [startYear, setStartYear] = useState<Date | null>(new Date());
  const [endYear, setEndYear] = useState<Date | null>(new Date());

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

  console.log(convertUnixDateToDate(1551830400));
  console.log(convertDateToUnixDate(new Date(1551830400)));

  return (
    <>
      <Box sx={{display:'flex'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns} > 
          <DatePicker
            views={['year']}
            label='From year'
            value={startYear}
            onChange={(newValue) => {
              setStartYear(newValue);
            }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
            className='date-picker-class'
          />
          <DatePicker
            views={['year']}
            label='To year'
            value={endYear}
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
