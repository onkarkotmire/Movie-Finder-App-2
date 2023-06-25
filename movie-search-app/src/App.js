import React, { useState } from "react";
import MovieLogic from "./components/MovieLogic";
import { MovieProvider } from "./MovieContext";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";




function App() {
  return (
    <div className='Container'>
      <MovieProvider>
      <MovieLogic/>
      </MovieProvider>
    </div>
  );
}

export default App;
