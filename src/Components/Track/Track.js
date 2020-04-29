import React from 'react';
import './Track.css';

export default function Track(props) {
console.log(props)
    const renderAction = (e) => props.isRemoval ? (<button> - </button>) : (<button> + </button>)

    const addTrack  = (track) => {
       props.onAdd(track);
    }
    return (
        <div className="Track">
            <div className="Track-info">
                <h3>{props.tracks.song}</h3>
                <p>{props.tracks.artist}</p>
                <p>{props.tracks.album}</p>
           </div>
           <button onClick={addTrack} className="Track-action">{renderAction()}</button>
        </div>
    )
}
