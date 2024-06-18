import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";


const App = () => {
  return (
      <div>
          <HeaderComponent/>
          <Outlet/>
      </div>
  );
};

export default App;
