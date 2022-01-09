import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBox = (props) => {
  return (
    <form className="form-inline ">
      <input
        className="form-control mr-sm-2"
        placeholder="Search..."
        value={props.value}
        onChange={(event) => props.children[3](event.target.value)}
      ></input>
    </form>
  );
};

export default SearchBox;
