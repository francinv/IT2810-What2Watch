
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './index.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function MovieTable() {
    const data = 
        [
            {title:"Shazam!", release_date:1553299200, genres:["Action","Comedy","Fantasy"]},
            {title:"Captain Marvel", release_date:1551830400, genres:["Action","Adventure","Science Fiction"]},
            {title:"Escape Room", release_date:1546473600, genres:["Thriller","Action","Horror","Science Fiction"]},
            {title:"How to Train Your Dragon: The Hidden World",release_date:1546473600,genres:["Animation ","Family","Adventure"]},
            {title:"Glass",release_date:1547596800,genres:["Documentary"]},
            {title:"Doraemon the Movie: Nobita's Treasure Island",release_date:1520035200,genres:["Animation"]},
        ];
  return (
    <TableContainer component={Paper} className="tablecontainer">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Movie Title</StyledTableCell>
            <StyledTableCell align="right">Release Date</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                data.map((movie) => (
                    <StyledTableRow key={movie.title}>
                        <StyledTableCell component="th" scope="row">
                            {movie.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">{movie.release_date}</StyledTableCell>
                        <StyledTableCell align="right">{movie.genres}</StyledTableCell>
                    </StyledTableRow> 
                ))
            },
        </TableBody>
      </Table>
    </TableContainer>
  );
}