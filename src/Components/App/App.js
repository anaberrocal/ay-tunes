import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import header from "../../assets/Ay-Tunes.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName: "Funky Playlist",
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }
  
  addTrack(track) {
       if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
    this.state.playlistTracks.push(track);
       this.setState({
         playlistTracks: this.state.playlistTracks 
       })
      };
   

   removeTrack(track) {
    this.state.playlistTracks = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
       this.setState({
         playlistTracks: this.state.playlistTracks
       })
   };

   updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
   };

   savePlaylist() {
    const trackURIs = this.state.playlistTracks.map( track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    .then(()=> {
      this.setState({
        playlistName:'Funky Playlist',
        playlistTracks: [],
      })
     })
     .then(alert("Enjoy your new playlist!"))
   };

   search(term) {
     Spotify.search(term).then(searchResults => {
       this.setState({searchResults: searchResults })
      })
   }

  render() {
    return (
      <div className="App">
        <div className="titleContainer">
          {/* <h1>
            Ay!<span className="highlight">Tunes</span>
          </h1> */}
          <img className='header' src={header} alt="header"/>
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
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
