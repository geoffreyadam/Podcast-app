import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../actions/index'
import ModalRecordAudio from './ModalRecordAudio';
// import ModalRecordAudio from './ModalRecordAudio.jsx';

  const RecordAudio = ({openModal, changeOpenModal}) => {

    function IsModalOpen() {
      if (openModal === false) {
        return <>
            <button onClick={()=> changeOpenModal()}>Start a recording session</button>
        </>;
      }else{
        return <>
          <ModalRecordAudio />
        </>;
      }
    }
    
    return (
        <div className="App">
          <IsModalOpen />
        </div>
    );
}

const mapStateToProps = (state) => ({
  openModal: state.openModal
})

const mapDispatchToProps = dispatch => ({
  changeOpenModal: status => dispatch(openModal(status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordAudio)