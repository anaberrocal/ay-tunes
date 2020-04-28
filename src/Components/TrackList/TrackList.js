import React, { Component } from 'react'
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                <Track/> {/*props={props}*/}
            </div>
        )
    }
}

export default TrackList
