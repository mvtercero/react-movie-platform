import React from "react";
import "../css/Search.css";

const Search = ({ onSearchMovie, value }) => {
  return (
    <div>
      <p>Busca tu peli de Batman</p>
      <input
        type="text"
        onChange={onSearchMovie}
        value={value}
        className="search"
      ></input>
    </div>
  );
};

export default Search;
