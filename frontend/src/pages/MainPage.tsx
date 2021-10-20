import { FunctionComponent } from "react";

import { Row, Col, Nav } from "react-bootstrap";
import CustomizedTables from "../components/movies";
import NavBar from "../components/navbar";
import { Layout } from 'antd';

import SideBar from "../components/sidebar/SideBar";
import './MainPage.css';


const { Header, Content, Sider } = Layout;

export const MainPage: FunctionComponent = () => {
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
