import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectNextPage,
  selectFilterSearch,
  selectFilterGenre,
  selectFilterDateStart,
  selectFilterDateEnd,
  selectSortByCriteria
} from "../services/selectors";
import MovieService from "../services/index";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";
import { Dispatch } from "redux";
import { setMovies } from "./mainPageSlice";
import { searchMovies } from "../services/__generated__/searchMovies";
import { useAppDispatch } from "../services/hooks";
import { Row, Col } from "react-bootstrap";
import "./MainPage.css";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import SortDropDown from "../components/sortdropdown";
import MovieTable from "../components/movies";
import SignIn from "../components/login";

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: searchMovies["getMoviesBySearch"]) =>
    dispatch(setMovies(movies)),
});

export const MainPage: FunctionComponent = () => {
  const nextPage = useSelector(selectNextPage);
  const filterSearchQuery = useSelector(selectFilterSearch);
  const filterGenre = useSelector(selectFilterGenre);
  const filterDateStart = useSelector(selectFilterDateStart);
  const filterDateEnd = useSelector(selectFilterDateEnd);
  const sortBy = useSelector(selectSortByCriteria);

  const { setMovies } = actionDispatch(useAppDispatch());

  const fetchMovies = async () => {
    const movies = await MovieService.getMoviesBySearch(
      nextPage,
      filterSearchQuery,
      filterGenre,
      filterDateStart,
      filterDateEnd,
      sortBy
    ).catch((error) => {
      console.log("Error", error);
    });

    if (movies) {
      console.log("setmovies mainpage");
      setMovies(movies);
    }
  };

  function fetchMore() {
    console.log("bottomscroll fetchmovies");
    fetchMovies();
  }

  useEffect(() => {
    fetchMovies();
  }, [filterSearchQuery, filterGenre, filterDateStart, filterDateEnd, sortBy]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const toggleLogInModal = () => {
    setIsLoginModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const closeModal = () => {
    if (isModalVisible) {
      setIsModalVisible(false);
    }
  };

  const closeLoginModal = () => {
    if (isLoginModalVisible){
      setIsLoginModalVisible(false);
    }
  }

  
  return (
    <>
      <Row>
        <Col>
          <NavBar onCloseClick={toggleLogInModal} isLoginModalVisible={isLoginModalVisible}/>
        </Col>
      </Row>
      <div className="innercontainer" onClick={closeLoginModal}>
        <SideBar />
        <div className="moviecontainer" onClick={closeModal}>
          <SortDropDown />
          <BottomScrollListener onBottom={fetchMore} />
          <MovieTable
            onBackDropClick={toggleModal}
            isModalVisible={isModalVisible}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
