import { ReactMic } from 'react-mic';
import React,  { useState } from 'react';
import { connect } from 'react-redux'
import { openModal } from "../actions/index";
import { savePodcast } from "../actions/index";


const RecordAudioModal = ({podcasts, savePodcast, changeOpenModal}) => {

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
  
    function IsRecording() {
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
          <div className="modal modal_active">
            <ReactMic
              record={record}
              className="sound-wave"
              onStop={onStop}
              // onData={onData}
              strokeColor="#FFD729"
              backgroundColor="#FF7600" />
              <section>
                <IsRecording />
              </section>
              <section>
                <button onClick={()=> changeOpenModal()}>End this recording session</button>
              </section>
          </div>
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