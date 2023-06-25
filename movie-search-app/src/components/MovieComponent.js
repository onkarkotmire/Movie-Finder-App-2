import React from "react";
import './MovieComp.css'



const MovieComponent = (props) => {
  const { Title, Year, imdbID, Poster } = props.movie;
  
  return (
    <div
      className='MovieContainer'
    >
      <h2 className='MovieName'>Title: {Title}</h2>
      <img src={Poster} alt={Title} className='CoverImage' />
      <div className='InfoColumn' style={{display: "flex", justifyContent:"center", flexDirection:"column"}}>
      <div className="MovieInfo"><h4>Year: {Year}</h4></div>
      <div><h4>IMDB ID: {imdbID}</h4></div>        
      </div> 
    </div>
  );
};
export default MovieComponent;