import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ fetchData, setIsLoading }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="navbar">
      <img className="navbar-brand" src="brf-logo.png" alt="" />
      <div className="search-container">
        <form
          onSubmit={ev => {
            ev.preventDefault();
            console.log("form result:", keyword);
            setIsLoading(true);
            fetchData(keyword);
          }}
        >
          <input
            className="searchbar"
            value={keyword}
            onChange={ev => setKeyword(ev.target.value)}
            type="text"
            name="kwrd"
            placeholder="Pesquisar"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
