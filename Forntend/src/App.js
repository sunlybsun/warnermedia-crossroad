import React, { useState, useEffect, useCallback } from "react";

import Carousel from "react-bootstrap/Carousel";

import TitleList from "./Components/TitleList";
import SearchBox from "./Components/SearchBox";

import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://localhost:44349/api/titles/${searchValue}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedMovies = [];

      for (const item of data) {
        loadedMovies.push({
          id: item.titleId,
          titleName: item.titleName,
          storyLines: item.storyLines,
          releaseYear: item.releaseYear,
          poster: item.poster,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <>
      <div className="carousel-main">
        <SearchBox>
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        </SearchBox>
        <Carousel>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-50"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-50"
              src="https://upload.wikimedia.org/wikipedia/en/9/94/Disturbia.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="https://upload.wikimedia.org/wikipedia/en/9/9d/Two_fast_two_furious_ver5.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <TitleList titles={movies} />
      </div>
    </>
  );
};

export default App;
