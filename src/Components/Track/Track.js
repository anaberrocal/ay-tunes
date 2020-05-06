import React from 'react';
import './Track.css';

function Track(props) {

    const renderAction = (e) =>{ 
       if(props.isRemoval) {
             return <button className="Track-action" onClick={removeTrack}> - </button>
             }
             else{
             return <button className="Track-action" onClick={addTrack}> + </button>
            }
    }
    const addTrack  = (track) => {
       props.onAdd(track);
    }

    const removeTrack = (track) => {
        props.onRemove(track);
    }

    
    return (
        <div className="Track">
            <div className="Track-info">
                <h3>{props.tracks.name}</h3>
                <p>{props.tracks.artists} | {props.tracks.album}</p>
           </div>
           {renderAction()}
        </div>
    )
}

export default Track