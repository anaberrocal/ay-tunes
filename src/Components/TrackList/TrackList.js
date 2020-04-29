import React, { Component } from 'react'
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                       return <Track onAdd={this.props.onAdd} tracks={track} key={track.id} />
                  
                    })
                }
                
            </div>
        )
    }
}

export default TrackList
