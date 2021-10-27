import { FunctionComponent, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap"
import React, { useEffect } from "react";
import { selectNext } from './selectors';
import { useSelector } from "react-redux"
import MovieService from "../services/index";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";
import { Dispatch } from "redux";
import { setMovies, setLoading } from "./mainPageSlice"
import { getAllMovies, getAllMovies_getAllMovies } from "../services/__generated__/getAllMovies"
import { useAppDispatch } from "../services/hooks"
import { Layout } from 'antd';
import CustomizedTables from "../components/movies";
import './MainPage.css';
import { BottomScrollListener } from "react-bottom-scroll-listener";
import MovieTable from "../components/movies";

const { Header, Content, Sider } = Layout;

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: getAllMovies["getAllMovies"]) => dispatch(setMovies(movies)),
  setLoading: (loading: boolean) => dispatch(setLoading(loading))
});
export const MainPage: FunctionComponent = () => {
  const { setMovies } = actionDispatch(useAppDispatch())
  const nextPage = useSelector(selectNext)
  const fetchMovies = async () => {
    const movies = await MovieService.getMoviesBySearch(nextPage).catch((error) => {
      console.log("Error", error);
    });
    if(movies) {
      console.log("setting movies")
      setLoading(false);
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible);
  }

  const closeModal = () => {
    if(isModalVisible){
      setIsModalVisible(false);
    }
  }

  return (
    <>
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <div className ="innercontainer">
        <SideBar />
        <div className="moviecontainer" onClick={closeModal}>
          <BottomScrollListener onBottom={fetchMovies}/>
          <MovieTable onBackDropClick={toggleModal} isModalVisible={isModalVisible}  />
        </div>
      </div>
    </>
  );
};


export default MainPage;
