import { FunctionComponent } from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button, { ButtonProps } from '@mui/material/Button';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { styled } from "@mui/material/styles";   


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

export const FilterByGenre: FunctionComponent<FilterByGenreProps> = ({
  genres,
}: FilterByGenreProps) => {
  return (
    <Box sx={{ display: 'flex'}}>
      <FormGroup>
        <FormControlLabel 
          control={
            <Checkbox name="action" sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#fff',
              },
              '&:hover':{
                color:'#cccccc',
              },
            }}/>
          }
          label="Action"
        />
        <FormControlLabel 
          control={
            <Checkbox name="horror" sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#fff',
              },
              '&:hover':{
                color:'#cccccc',
              },
            }}/>
          }
          label="Horror"
        />
        <FormControlLabel 
          control={
            <Checkbox name="thriller" sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#fff',
              },
              '&:hover':{
                color:'#cccccc',
              },
            }}/>
          }
          label="Thriller"
        />
        <FormControlLabel 
          control={
            <Checkbox name="comedy" sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#fff',
              },
              '&:hover':{
                color:'#cccccc',
              },
            }}/>
          }
          label="Comedy"
        />
        <FilterButton variant="contained" endIcon={<MovieCreationOutlinedIcon/>}>Filter</FilterButton>
      </FormGroup>
      
    </Box>
  );
};
