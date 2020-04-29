import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
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
      ]
    }
  }
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
            <SearchResults SearchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
