import { FunctionComponent } from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button, { ButtonProps } from '@mui/material/Button';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { styled } from "@mui/material/styles";
import { selectNextPage, selectFilterSearch, selectFilterGenre, selectFilterDateStart, selectFilterDateEnd } from '../../pages/selectors';
import { useAppDispatch } from "../../services/hooks"
import { Dispatch } from "redux";
import MovieService from "../../services/index";
import { getAllMovies } from "../../services/__generated__/getAllMovies"
import { useSelector } from "react-redux"
import { setMovies } from "../../pages/mainPageSlice"


export interface FilterByGenreProps {
  genres: string[];
}

const FilterButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#000',
  '&:hover': {
    backgroundColor: '#cccccc',
    color:'#000'
  },
}));

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: getAllMovies["getAllMovies"]) => dispatch(setMovies(movies)),
});

export const FilterByGenre: FunctionComponent<FilterByGenreProps> = ({
  genres,
}: FilterByGenreProps) => {

  const { setMovies } = actionDispatch(useAppDispatch())
  const nextPage = useSelector(selectNextPage)
  const searchQuery = useSelector(selectFilterSearch)
  const searchGenre = useSelector(selectFilterGenre)
  const dateStart = useSelector(selectFilterDateStart)
  const dateEnd = useSelector(selectFilterDateEnd)
  const fetchMovies = async () => {
    console.log("Next page:", nextPage, " Search query:", searchQuery, " searchGenre:", searchGenre, " dateStart:", dateStart, " dateEnd:", dateEnd)
    const movies = await MovieService.getMoviesBySearch(nextPage).catch((error) => {
      console.log("Error", error);
    });
    if(movies) {
      setMovies(movies);
    }
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <FormGroup>
          {
            genres.map((genre: string) => ( 
              <FormControlLabel 
                control={
                  <Checkbox name={genre} sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                    '&:hover':{
                      color:'#cccccc',
                    },
                  }}/>
                }
                label={genre}
              /> ))
          }
        <FilterButton variant="contained" endIcon={<MovieCreationOutlinedIcon/>}>Filter</FilterButton>
      </FormGroup>
      
    </Box>
  );
};
