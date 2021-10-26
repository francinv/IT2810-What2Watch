import Box from "@mui/material/Box";
import { FunctionComponent, useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

export const FilterByYear: FunctionComponent = () => {
  const [startYear, setStartYear] = useState(new Date());
  const [endYear, setEndYear] = useState(new Date());

  function convertUnixDateToDate(unixNumber: number) {
    const date = new Date(unixNumber * 1000);
    //console.log(date.getFullYear());
    return date;
  }

  function convertDateToUnixDate(date: Date) {
    const unixTimeStamp = date.getTime() / 1000;
    return unixTimeStamp;
  }

  console.log(convertUnixDateToDate(1551830400));
  console.log(convertDateToUnixDate(new Date(1551830400)));
  return (
    <div>
      <DatePicker
        views={['year']}
        label='From year'
        value={startYear}
        onChange={(newValue) => {
          setStartYear(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
      <DatePicker
        views={['year']}
        label='From year'
        value={endYear}
        onChange={(newValue) => {
          setEndYear(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
      

    </div>
  );
};
