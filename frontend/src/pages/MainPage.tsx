import { FunctionComponent, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap"
import React, { useEffect } from "react";
import { selectNextPage, selectFilterSearch, selectFilterGenre, selectFilterDateStart, selectFilterDateEnd } from './selectors';
import { useSelector } from "react-redux"
import MovieService from "../services/index";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";
import { Dispatch } from "redux";
import { setMovies } from "./mainPageSlice"
import { getAllMovies, getAllMovies_getAllMovies } from "../services/__generated__/getAllMovies"
import { useAppDispatch } from "../services/hooks"
import { Layout } from 'antd';
import CustomizedTables from "../components/movies";
import './MainPage.css';
import { BottomScrollListener } from "react-bottom-scroll-listener";

const { Header, Content, Sider } = Layout;

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: getAllMovies["getAllMovies"]) => dispatch(setMovies(movies))
});

export const MainPage: FunctionComponent = () => {
  const { setMovies } = actionDispatch(useAppDispatch())
  const nextPage = useSelector(selectNextPage)
  const searchQuery = useSelector(selectFilterSearch)
  const searchGenre = useSelector(selectFilterGenre)
  const dateStart = useSelector(selectFilterDateStart)
  const dateEnd = useSelector(selectFilterDateEnd)
  const fetchMovies = async () => {
    console.log("Caller fetch i mainpagekomponent, Next page:", nextPage, " Search query:", searchQuery, " searchGenre:", searchGenre, " dateStart:", dateStart, " dateEnd:", dateEnd)

    const movies = await MovieService.getMoviesBySearch(nextPage, searchGenre).catch((error) => {
      console.log("Error", error);
    });
    if(movies) {
      setMovies(movies);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []) 


  return (
    <>
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <div className ="innercontainer">
        <SideBar />
        <div className="moviecontainer">
          <BottomScrollListener onBottom={fetchMovies}/>
          <CustomizedTables/>
        </div>
      </div>
    </>
  );
};


export default MainPage;
