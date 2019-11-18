import { ReactMic } from 'react-mic';
import React,  { useState } from 'react';
import { connect } from 'react-redux'
import { openModal } from "../actions/index";
import { savePodcast } from "../actions/index";


const RecordAudioModal = ({savePodcast}) => {

  const [record, setRecord] = useState(false);


    const startRecording = () => {
      setRecord(true);
    }
   
    const stopRecording = () => {
      setRecord(false);
    }
    const onStop = (recordedBlob) => {
      savePodcast(recordedBlob.blobURL)
    }

    function StartRecord() {
      if (record === false) {
        return <>
          <button onClick={startRecording} type="button">Record</button>
        </>;
      }else{
        return <>
          <button onClick={stopRecording} type="button">Save</button> 
        </>;
      }
    }
    
  return (
    <div className="modal-ctn">
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        // onData={onData}
        strokeColor="#FFD729"
        backgroundColor="#FF7600" />
        <section>
          <StartRecord />
        </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts
})

const mapDispatchToProps = dispatch => ({
  changeOpenModal: status => dispatch(openModal(status)),
  savePodcast: url => dispatch(savePodcast(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordAudioModal)