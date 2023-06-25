import { createContext, useState } from "react";
import axios from 'axios'
let movieContext = createContext();

export default movieContext;

//custom context provider for simplicity of our use like maintain states
export const API_KEY = "4ac85578";
export function MovieProvider({ children }) {

    const [searchQuery, updateSearchQuery] = useState("");
    const [movieList, updateMovieList] = useState([]);
    const [timeoutId, updateTimeoutId] = useState();

  
    const fetchData = async (searchString) => {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
        );
        updateMovieList(response.data.Search);
      };

      const onTextChange = (e) => {
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 300);
        updateTimeoutId(timeout);
      };


  return (
    <movieContext.Provider value={{ searchQuery, movieList, onTextChange }}>
      {children}
    </movieContext.Provider>
  );
}