import React from 'react';
import './Track.css';


const isRemoval = false;

export default function Track(props) {

    const renderAction = (e) => isRemoval ? (<button> - </button>) : (<button> + </button>)

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
