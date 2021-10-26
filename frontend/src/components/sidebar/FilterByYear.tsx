import { FunctionComponent, useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { selectNextPage, selectFilterSearch, selectFilterGenre, selectFilterDateStart, selectFilterDateEnd } from '../../pages/selectors';
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

  function convertUnixDateToDate(unixNumber: number) {
    const date = new Date(unixNumber * 1000);
    //console.log(date.getFullYear());
    return date;
  }
  function convertDateToUnixDate(date: Date) {
    const unixTimeStamp = date.getTime() / 1000;
    return unixTimeStamp;
  }
  function setStartYear(year: number) {
    setStateStartDate(convertDateToUnixDate(new Date(year, 0)));
  }
  function setEndYear(year: number) {
    setStateEndDate(convertDateToUnixDate(new Date(year, 0)));
  }

  return (
    <div>
      <Form>
        <Form.Group as={Col} controlId="form-signup-first-name">
          <Form.Label>Start year: </Form.Label>
          <Form.Control
            autoFocus
            type="number"
            pattern="^[12][0-9]{3}$"
            minLength={4}
            placeholder="ex. 2000"
            onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="form-signup-last-name">
          <Form.Label>End year: </Form.Label>
          <Form.Control
            type="number"
            pattern="^[12][0-9]{3}$"
            minLength={4}
            placeholder="ex. 2020"
            onChange={(e) => setEndYear(parseInt(e.target.value, 10))}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Filter
        </Button>
      </Form>
    </div>
  );
};
