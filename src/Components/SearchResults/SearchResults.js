import React, { Component } from 'react'
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>These are the songs</h2>
                <h3>Res.songName</h3>
                <p>Res.Artist</p>
                <p>Res.ALbum</p>
                <TrackList/>
            </div>
        )
    }
}

export default SearchResults
