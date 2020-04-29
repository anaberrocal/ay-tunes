import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist";
import TrackList from "../TrackList/TrackList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);

    this.state = {
      searchResults: [
        {
          id: 1,
          song: "Just Dance",
          artist: "Lady Gaga",
          album: "Just Dance",
        },
        {
          id: 2,
          song: "One Out of Two",
          artist: "Breakbot",
          album: "By Your Side",
        },
        {
          id: 3,
          song: "Ocean Eyes",
          artist: "Billie Eilish",
          album: "Billie Eilish",
        },
      ],
      playlistTracks: [
        {
          id: 1,
          song: "Just Dance",
          artist: "Lady Gaga",
          album: "Just Dance",
        },
        {
          id: 2,
          song: "One Out of Two",
          artist: "Breakbot",
          album: "By Your Side",
        },
        {
          id: 3,
          song: "Ocean Eyes",
          artist: "Billie Eilish",
          album: "Billie Eilish",
        },
      ],
      playlistName: "My Playlist",
    };

  }
  
  addTrack(track) {
    let id = track.id;
     if(this.state.playlistTracks[id]){
       return false
     }else {
       const newPlaylist = this.state.playlistTracks; 
       newPlaylist.push(track)
       this.setState({
         playlistTracks: newPlaylist 
       }
       )}
   };
  //  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  //   return;
  // }
  render() {
    console.log(this.state.SearchResults);
    return (
      <div className="App">
        <div className="titleContainer">
          <h1>
            Ay!<span className="highlight">Tunes</span>
          </h1>
        </div>
        <div>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} SearchResults={this.state.searchResults} />
            <Playlist
              PlaylistTracks={this.state.playlistTracks}
              PlaylistName={this.state.playlistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
