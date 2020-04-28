import React, { Component } from 'react';
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends Component {
    render() {
        return (
            <div className="PlayList">
                <input defaultValue={'New Playlist'}/>
                <TrackList/>
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist
