import React,  { useState } from 'react';
import { connect } from 'react-redux'
import AudioFilesList from "./AudioFilesList.jsx";
import { addAudioFile } from "../actions/index";

const AudioFile = (props) => {

    return (
        
        <div className="App">
            {this}
            <AudioFilesList />
        </div>
    );
}
  
  export default connect(
    null,
  )(AudioFile)

