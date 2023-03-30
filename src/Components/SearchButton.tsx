import React, { useContext } from "react";
import { CountryContext } from "./Country";

const SearchButton = () => {
  const value = useContext(CountryContext);
  const search = value.search;

  return (
    <div>
      <button className="search_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
        <input
          type="searchg"
          className="search_bar"
          placeholder="Search for a country..."
          onChange={search}
        />
      </button>
    </div>
  );
};

export default SearchButton;
