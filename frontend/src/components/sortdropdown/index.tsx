import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './index.css';

export default function SortDropDown() {
  const [yearssort, setYearsSort] = React.useState('');
  const [titlesort, setTitleSort] = React.useState('');

  const handleYears = (event: SelectChangeEvent) => {
    setYearsSort(event.target.value as string);
  };

  const handleTitle = (event: SelectChangeEvent) => {
    setTitleSort(event.target.value as string);
  }

  return (
    <Box className="select-container" sx={{ display:'flex', minWidth:300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yearssort}
          label="Year"
          onChange={handleYears}
        >
          <MenuItem value={"yincreasing"}>Increasing</MenuItem>
          <MenuItem value={"ydecreasing"}>Decreasing</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titlesort}
          label="Title"
          onChange={handleTitle}
        >
          <MenuItem value={"yincreasing"}>Alphabetical</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}