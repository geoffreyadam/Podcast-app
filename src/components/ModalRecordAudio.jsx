import { ReactMic } from 'react-mic';
import React,  { useState } from 'react';
import { connect } from 'react-redux'
import { addNewState } from "../actions/index";

// export default class ModalRecordAudio extends React.PureComponent {
//     constructor(props) {
//       super(props);
//       this.state = {
//         audioFiles: [],
//         play: false,
//         pause: true
//       };
//       this.onStop = this.onStop.bind(this);
//       this.play = this.play.bind(this);
//       this.pause = this.pause.bind(this);
//       this.url = "";
//     }

//     play(url){
//       this.setState({
//         play: true,
//         pause: false
//       });
//       this.url = url;
//       this.audio = new Audio(this.url);
//       this.audio.play();
//     }
  
//     pause(){
//     this.setState({ play: false, pause: true });
//       this.audio.pause();
//     }

//     startRecording = () => {
//       this.setState({
//         record: true
//       });
//     }
   
//     stopRecording = () => {
//       this.setState({
//         record: false
//       });
//     }
   
//     onStop(recordedBlob) {
//       this.state.audioFiles.push(recordedBlob.blobURL)
//     }
   
//     render() {
//       const AudioFiles = this.state.audioFiles.map((file, i) => 
//       <div key={i}>
//         <li className="displayedTrack" value={file} onClick={() => this.play(file)}>Play track</li>
//       </div>
//       );
//       return (
//         <div className="modal-ctn">
//           <div className={"modal " + (this.props.active ? 'modal_active' : '')} >
//             <ReactMic
//               record={this.state.record}
//               className="sound-wave"
//               onStop={this.onStop}
//               onData={this.onData}
//               strokeColor="#FFD729"
//               backgroundColor="#FF7600" />
//               <section>
//                 <button onClick={this.startRecording} type="button">Record</button>
//                 <button onClick={this.stopRecording} type="button">Save</button> 
//               </section>
//               {AudioFiles}
//               <button onClick={()=> props.newState("grs")}>NEW STATE</button>
//           </div>
//         </div>
//       );
//     }
//   }




const RecordAudioMdal = (props) => {


  const [record, setRecord] = useState(false);

    const startRecording = () => {
      setRecord(true);
    }
   
    const stopRecording = () => {
      setRecord(false);
    }
   
    const onStop = (recordedBlob) => {
      // this.state.audioFiles.push(recordedBlob.blobURL)
      props.newState(recordedBlob.blobURL);
    }
  return (
      <div className="App">
        
        <div className="modal-ctn">
          {/* <div className={"modal " + (this.props.active ? 'modal_active' : '')} > */}
          <div className="modal modal_active">
            <ReactMic
              record={record}
              className="sound-wave"
              onStop={onStop}
              // onData={onData}
              strokeColor="#FFD729"
              backgroundColor="#FF7600" />
              <section>
                <button onClick={startRecording} type="button">Record</button>
                <button onClick={stopRecording} type="button">Save</button> 
              </section>
              <button onClick={()=> props.newState("grs")}>NEW STATE</button>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  record: state.record
})

const mapDispatchToProps = dispatch => ({
  newState: (text) => dispatch(addNewState(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(RecordAudioMdal)