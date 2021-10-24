import { FunctionComponent } from "react";
import React, { useEffect } from "react";
import { selectNext } from './selectors';
import { useSelector } from "react-redux"
import MovieService from "../services/index";
import { Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";
import { Dispatch } from "redux";
import { setMovies } from "./mainPageSlice"
import { getAllMovies } from "../services/__generated__/getAllMovies"
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
  const nextPage = useSelector(selectNext)
  const fetchMovies = async () => {
    const movies = await MovieService.getMoviesBySearch(nextPage).catch((error) => {
      console.log("Error", error);
    });
    if(movies) {
      setMovies(movies);
    }
  }
  useEffect(() => {
    console.log("UseEffect was triggered")
    fetchMovies();
  }, []) 

  const fetchMore = async () => {
    console.log("fetchMore was triggered")
    fetchMovies();
  };

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
