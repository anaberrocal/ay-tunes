import React, { Component } from 'react'
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>This is what we found</h2>
                <TrackList 
                isRemoval={true} 
                onAdd={this.props.onAdd}
                tracks={this.props.SearchResults}
                />
            </div>
        )
    }
}

export default SearchResults
