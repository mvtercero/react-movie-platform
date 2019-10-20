import React from "react";

const MovieDetail = ({ director, actors, plot }) => {
  return (
    <ul>
      <li>{director}</li>
      <li>{actors}</li>
      <li>{plot}</li>
    </ul>
  );
};

export default MovieDetail;
