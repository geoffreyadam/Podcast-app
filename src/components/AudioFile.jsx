import React,  { useState } from 'react';
import { connect } from 'react-redux'
import AudioFilesList from "./AudioFilesList.jsx";
import { addAudioFile } from "../actions/index";

const AudioFile = (props) => {


    // const newTaskNameChange = event => {
    //     setNewTask({
    //         ...newTask,
    //         name: event.target.value
    //     });
    // };

    // const newTaskStatusChange = event => {
    //     setNewTask({
    //         ...newTask,
    //         finished: event.target.checked
    //     });
    // };

    return (
        
        <div className="App">
            {this}
            <AudioFilesList />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    // newState: (text) => dispatch(addNewState(text))
})
  
  export default connect(
    null,
    // mapDispatchToProps
  )(AudioFile)

