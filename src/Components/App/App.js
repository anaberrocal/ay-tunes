import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist";

function App() {
  return (
    <div className="App">
      <div className="titleContainer">
      <h1>
        Ay!<span class="highlight">Tunes</span>
      </h1>
      </div>
      <div>
        <SearchBar/>
        <div class="App-playlist">
          <SearchResults/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
