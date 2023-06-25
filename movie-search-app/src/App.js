import React, { useState } from "react";
// import Axios from "axios";
// import MovieComponent from "./components/MovieComponent";
import MovieLogic from "./components/MovieLogic";
import { MovieProvider } from "./MovieContext";
import { Route, Routes } from "react-router-dom";
// import {Route, Routes} from 'react-router-dom'
import Details from "./components/Details";




function App() {
  return (
    <div className='Container'>
      <MovieProvider>
      <MovieLogic/>
      </MovieProvider>
      {/* <Routes>
        <Route path="/" element={<MovieLogic/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;