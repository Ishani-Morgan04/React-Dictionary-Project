import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="audio-player col-9">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            autoPlay={false}
            controls
          />
        </div>
        <div className="audio-text col-3">
          <span className="text">{props.phonetic.text}</span>
        </div>
      </div>
    </div>
  );
}
