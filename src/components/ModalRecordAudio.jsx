import { ReactMic } from 'react-mic';
import React,  { useState } from 'react';
import { connect } from 'react-redux'
import { openModal } from "../actions/index";
import { savePodcast } from "../actions/index";


const RecordAudioModal = ({savePodcast}) => {

  const [podcastInfo, setpodcastInfo] = useState(false);
  const [podcastName, setPodcastName] = useState("");
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


    function GetInfo(){
      return <>
        <h2>Name your podcast</h2>
        <form action="submit">
          <div>
            <label htmlFor="podcastName">Nom du podcast</label>
            <input name="podcastName" type="text"></input>
          </div>
          <div>
            <label htmlFor="authors">Nom du podcast</label>
            <input name="authors" type="text"></input>
          </div>
          <input value="Commencer l'enregistrement" />
        </form>
      </>

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

    function DisplayPodcastRecord(){
      if(podcastInfo === true){
        return <>
          <GetInfo />
        </>
      }else{
        return <>
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

        </>
      }
    }
    
  return (
        <div className="modal-ctn">
                <DisplayPodcastRecord />
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