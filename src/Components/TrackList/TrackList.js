import React, { Component } from 'react'
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                       return <Track 
                       track={track} 
                       key={track.id}
                       isRemoval={this.props.isRemoval} 
                       onRemove={this.props.onRemove} 
                       onAdd={this.props.onAdd} 
                       />
                  
                    })
                }
                
            </div>
        )
    }
}

export default TrackList
