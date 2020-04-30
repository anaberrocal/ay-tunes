import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search = () => {
    this.props.onSearch(this.state.term);
  };

  handleTermChange = (e) =>{
    this.setState({
      term: e.target.value,
    })
  };

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} type="text" placeholder="Search for a song..." />
        <button className="SearchButton">Search</button>
      </div>
    );
  }
}

export default SearchBar;
