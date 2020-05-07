import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e){
    this.props.onNameChange(e.target.value);
  };

  render() {
    return (
      <div className="PlayList">
        <input
          defaultValue={"Funky Playlist"}
          onChange={this.handleNameChange}
        />
        <TrackList
          isRemoval={true}
          onRemove={this.props.onRemove}
          tracks={this.props.PlaylistTracks}
        />
        <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
