import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Menu from "./components/Menu.jsx";
import ModalRecordAudio from "./components/ModalRecordAudio.jsx";
import AudioFilesList from "./components/AudioFilesList.jsx";

  const App = ({openModal, openPodcasts}) => {

    function DisplayApp() {
      if (openModal === true) {
        return <>
          <h1>Record a podcast</h1>
          <ModalRecordAudio />
        </>;
      }else if(openPodcasts === true){
        return <>
          <h1>All the podcasts</h1>
          <AudioFilesList />
        </>;
      }else{
        return <>
          <h1>Welcome to the podcast app</h1>
        </>
      }
    }
    
    return (
        <div className="App">
          <Menu />
          <DisplayApp />
        </div>
    );
}

const mapStateToProps = (state) => ({
  openModal: state.openModal,
  openPodcasts: state.openPodcasts
})

export default connect(
  mapStateToProps,
)(App)