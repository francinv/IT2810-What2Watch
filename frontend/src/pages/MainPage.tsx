import { FunctionComponent } from "react";
import React, { useEffect } from "react";
import MovieService from "../services/index";
import { Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";

const styles = {
  contentDiv: {
    display: "flex",
  },
  contentMargin: {
    marginLeft: "10px",
    width: "100%",
  },
};
export const MainPage: FunctionComponent = () => {

  const fetchMovies = async () => {
    const movies = await MovieService.getAllMovies().catch((error) => {
      console.log("Error", error);
    });

    if(movies) {
      console.log(movies)
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
          <NavBar />
        </Col>
      </Row>
      <div>
        <SideBar />
      </div>
    </>
  );
};

export default MainPage;
