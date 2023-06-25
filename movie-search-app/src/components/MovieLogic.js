import React from 'react'
import {useContext  } from 'react'
import MovieComponent from './MovieComponent';
import movieContext from '../MovieContext';


export default function MovieLogic() {
    const {searchQuery, movieList, onTextChange} = useContext(movieContext)
    
    return (
      <div className='Container'>
        <div className='Header'>
          <div className='AppName' style={{ display: "flex", justifyContent: "center", textAlign: "center", backgroundColor: "black", color: "white"}}>
            <h1>Movie Finder App</h1>
          </div>
          <div className='SearchBox' style={{display:"flex", justifyContent:"center", marginTop: "2%"}}>
            <input
              placeholder="Search Movie"
              value={searchQuery}
              onChange={onTextChange}
             className='SearchInput'
             style={{width: "50vw", height: "4vh", textAlign:"center", fontSize:"17px"}}
             />
          </div>
          <div style={{width:"100%", textAlign:"center", marginTop:"2%"}}><h2>Sharing a few of our Favourite movies</h2></div>
          
        </div>
       
        <div className='MovieListContainer' style={{ marginTop:"2%", display:"flex", justifyContent:"space-between", width:"70vw", flexWrap:"wrap", marginLeft: "12%", }} >
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
              />
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }

