import React from 'react';
import './App.css';
import RecordAudio from "./components/RecordAudio.jsx";
import PlayAudio from "./components/PlayAudio.jsx";
import ModalRecordAudio from './components/ModalRecordAudio.jsx';
import AudioFilesList from './components/AudioFilesList.jsx';


function App() {
  
  
  return (
    <div className="App">
      <AudioFilesList />
      <ModalRecordAudio />
    </div>
  );
}

export default App;
