import React from 'react';
import './Track.css';


const isRemoval = false;

export default function Track() {

    const renderAction = (e) => isRemoval ? (<button> - </button>) : (<button> + </button>)

    return (
        <div className="Track">
            <div className="Track-info">
                <h3>Tiny Dancer</h3>
                <h3>Tiny Dancer</h3>
           { /* trackList.map((props) => {
               <h3>{props.title}/<h3>
               <p>{props.artist}</p> | <p>{props.album}</p>
           })*/}
           </div>
           <button className="Track-action">{renderAction()}</button>
        </div>
    )
}
