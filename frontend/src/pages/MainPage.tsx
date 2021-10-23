import { FunctionComponent, useState } from "react";
import React, { useEffect } from "react";
import MovieService from "../services/index";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";
import { Dispatch } from "redux";
import { setMovies, setLoading } from "./mainPageSlice"
import { getAllMovies, getAllMovies_getAllMovies } from "../services/__generated__/getAllMovies"
import { useAppDispatch } from "../services/hooks"
import { Layout } from 'antd';
import { Row, Col, Nav } from "react-bootstrap";
import { MovieTable } from "../components/movies";
import Loader from "../components/loader/index"
import InfiniteScroll from 'react-infinite-scroll-component';

const { Header, Content, Sider } = Layout;

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: getAllMovies["getAllMovies"]) => dispatch(setMovies(movies)),
  setLoading: (loading: boolean) => dispatch(setLoading(loading))
});

export const MainPage: FunctionComponent = () => {
  const { setMovies } = actionDispatch(useAppDispatch());
  const { setLoading } = actionDispatch(useAppDispatch());

  const fetchMovies = async () => {
    setLoading(true);
    const movies = await MovieService.getMoviesBySearch("", "Action", 1).catch((error) => {
      console.log("Error", error);
    });

    if(movies) {
      console.log("setting movies")
      setLoading(false);
      setMovies(movies);
    }
  }

  const hasMore = true

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
          <InfiniteScroll
              dataLength={500}
              next={fetchMovies}
              hasMore={hasMore}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              <MovieTable/>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default MainPage;
