import React from 'react';
import { connect } from 'react-redux'
// import { openModal } from '../actions/index'
// import ModalRecordAudio from './ModalRecordAudio';
// import ModalRecordAudio from './ModalRecordAudio.jsx';




  const AudioIndex = () => {
    
    const CreateOscillator = () => {

    const audio = document.querySelector('audio');
        navigator.mediaDevices.getUserMedia({audio: true})
        .then(function(stream){
            const testAudio = stream
            console.log(stream)
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioContext.createMediaStreamsource(testAudio);
        })
        

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
// also output the visuals into a video element




        setInterval(() => {
            console.log(source);
        }, 200);
        return <><h2>Rien</h2></>
    };
    return (
        <div className="App">
            <CreateOscillator />
          <h1>Audio</h1>
        </div>
    );
}



export default connect(
    null,
    null
)(AudioIndex)
