import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SortDropDown() {
  const [sorting, setSorting] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={"yincreasing"}>Years Increasing</MenuItem>
          <MenuItem value={"ydecreasing"}>Years Decreasing</MenuItem>
          <MenuItem value={"tascending"}>Title Ascending</MenuItem>
          <MenuItem value={"tdescending"}>Title Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}