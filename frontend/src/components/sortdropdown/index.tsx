import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./index.css";
import { SortBy } from "../../util/sortingTypes";

export default function SortDropDown() {
  const [yearssort, setYearsSort] = React.useState("");
  const [titlesort, setTitleSort] = React.useState("");

  const handleYears = (event: SelectChangeEvent) => {
    setYearsSort(event.target.value as string);
  };

  const handleTitle = (event: SelectChangeEvent) => {
    setTitleSort(event.target.value as string);
  };

  return (
    <Box className="select-container" sx={{ display: "flex", minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yearssort}
          label="Year"
          onChange={handleYears}
        >
          <MenuItem value={SortBy.AlphabeticalAsc}>Title (Increasing)</MenuItem>
          <MenuItem value={SortBy.AlphabeticalDesc}>
            Title (Decreasing)
          </MenuItem>
          <MenuItem value={SortBy.YearAsc}>Release Year (Increasing)</MenuItem>
          <MenuItem value={SortBy.YearDesc}>Release Year (Decreasing)</MenuItem>
          <MenuItem value={SortBy.Clear}>Clear</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
