import React from 'react';
import './Track.css';

export default function Track(props) {

    const renderAction = (e) => props.isRemoval ? (<button onClick={removeTrack}> - </button>) : (<button onClick={addTrack}> + </button>)

    const addTrack  = (track) => {
       props.onAdd(track);
    }

    const removeTrack = (track) => {
        props.onRemove(track);
    }

    
    return (
        <div className="Track">
            <div className="Track-info">
                <h3>{props.tracks.song}</h3>
                <p>{props.tracks.artist}</p>
                <p>{props.tracks.album}</p>
           </div>
           <button className="Track-action">{renderAction()}</button>
        </div>
    )
}
