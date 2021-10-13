import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
