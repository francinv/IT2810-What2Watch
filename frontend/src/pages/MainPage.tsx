import { FunctionComponent } from "react";
import React, { useEffect } from "react";
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

const { Header, Content, Sider } = Layout;

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: getAllMovies["getAllMovies"]) => dispatch(setMovies(movies))
});

export const MainPage: FunctionComponent = () => {
  const { setMovies } = actionDispatch(useAppDispatch())

  const fetchMovies = async () => {
    const movies = await MovieService.getAllMovies().catch((error) => {
      console.log("Error", error);
    });

    

    if(movies) {
      setMovies(movies);
      console.log(movies[1]);
    }
  }

  useEffect(() => {
    fetchMovies();
    console.log("useEffect")
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
          <CustomizedTables />
        </div>
      </div>
    </>
  );
};

export default MainPage;
