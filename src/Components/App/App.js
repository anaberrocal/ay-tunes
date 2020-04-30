import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
          id: 3,
          song: "Honeymoon Avenue",
          artist: "Ariana Grande",
          album: "Yours truly",
        },
        {
          id: 2,
          song: "One Out of Two",
          artist: "Breakbot",
          album: "By Your Side",
        },
        {
          id: 5,
          song: "Ocean Eyes",
          artist: "Billie Eilish",
          album: "Billie Eilish",
        },
      ],
      playlistName: "My Playlist",
    };

  }
  
  addTrack(track) {
      //  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  //   return;
  // }
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

   removeTrack(track) {
    let id = track.id;
     if(this.state.playlistTracks[id]){
       return false
     }else {
       const newPlaylist = this.state.playlistTracks; 
       newPlaylist.pop(track)
       this.setState({
         playlistTracks: newPlaylist 
       }
       )}
   };

   updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
   };

   savePlaylist() {
    const trackURIs = this.state.playlistTracks.map( track => track.uri);
   };

   search(term) {
     Spotify.search(term).then(searchResults => {
       this.setState({searchResults: searchResults })
      }
     )
   }

  render() {
    return (
      <div className="App">
        <div className="titleContainer">
          <h1>
            Ay!<span className="highlight">Tunes</span>
          </h1>
        </div>
        <div>
          <SearchBar 
          onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults 
            onAdd={this.addTrack} 
            SearchResults={this.state.searchResults} 
            />
            <Playlist
              onRemove={this.removeTrack}
              PlaylistTracks={this.state.playlistTracks}
              PlaylistName={this.state.playlistName}
              onNameChange={this.state.updatePlaylistName}
              onSave={this.state.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
