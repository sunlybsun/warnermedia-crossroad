import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import Details from "./Details";

const TitleDetail = () => {
  const { name } = useParams();
  const [titleDetails, setTitleDetails] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch(`https://localhost:44349/api/titles/${name}`);
    const data = await response.json();

    const loadMovie = [];
    for (const item of data) {
      loadMovie.push({
        id: item.titleId,
        titleName: item.titleName,
        storyLines: item.storyLines,
        releaseYear: item.releaseYear,
        awards: item.awards,
        poster: item.poster,
      });
    }

    setTitleDetails(loadMovie);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <>
      <div>
        <Details results={titleDetails} />
      </div>
    </>
  );
};
export default TitleDetail;
