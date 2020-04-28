import React, { Component } from "react";
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search for a song..."
        />
        <button className="SearchButton">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar
