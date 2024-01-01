import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import "../../../styles/common/search-bar.css";
import Filter from "../../../images/filter.png";
import Search from "../../../images/search.png";
const people = [
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
];

function CommonSearchBar({ size }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchBarFocus = () => {
    setSearchBarStatus(!searchBarStatus);
  };
  const handleSearchBarBlur = () => {
    setSearchBarStatus(!searchBarStatus);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.name.toLowerCase().includes(searchTerm),
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className={`flex_vertical search-bar ${size}`}>
      <div className={`search-bar_input flex_horizontal flex_space-between`}>
        <input
          type="text"
          className={`search-bar_text`}
          placeholder={"What are you looking for?"}
          onChange={handleChange}
          onFocus={handleSearchBarFocus}
          onBlur={handleSearchBarBlur}
        />
        <div className={`search-bar_button`} onClick={console.log()}>
          <img src={Filter} alt="" />
        </div>
        <div className={`search-bar_button`} onClick={console.log()}>
          <img src={Search} alt="" />
        </div>
      </div>
      <div
        className={`${
          searchBarStatus ? "" : "hidden"
        } result-list flex_vertical flex_center`}
      >
        {searchResults.map((item, index) => (
          <div className={`result-item flex_horizontal flex_start`} key={index}>
            <img src={item.image} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

CommonSearchBar.propTypes = {
  size: PropTypes.string,
};

export default CommonSearchBar;
