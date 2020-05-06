import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);this.state = {term: ''}
  }
  search = (field) => {
    this.props.onSearch(field);
  };

  handleTermChange = (e) =>{
    this.setState({
      term: e.target.value,
    })
  };

  render() {
    return (
      <div className="SearchBar">
        <input onChange={e=> this.handleTermChange(e)} type="text" placeholder="Search for a song..." />
        <button onClick={()=> this.search(this.state.term)} className="SearchButton">Search</button>
      </div>
    );
  }
}

export default SearchBar;
