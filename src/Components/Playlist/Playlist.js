import React, { Component } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends Component {
  state = {
    playlistName: "",
  };

  handleNameChange = (e) => {
    this.setState({
      playlistName: e.target.value,
    });
  };

  render() {
    return (
      <div className="PlayList">
        <input
          placeholder="Funky new playlist"
          name="playlistName"
          onChange={this.handleNameChange}
        />
        <TrackList
          isRemoval={true}
          onRemove={this.props.onRemove}
          onAdd={this.props.onAdd}
          tracks={this.props.PlaylistTracks}
        />
        <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
