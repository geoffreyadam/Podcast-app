import React from 'react';
import ModalRecordAudio from './ModalRecordAudio.jsx';

export default class RecordAudio extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        startRecord: false
      };
      // this.openRecordModal = this.openRecordModal.bind(this);
    }
    
    openRecordModal(){
      this.setState((prevState) =>  ({startRecord: !prevState.startRecord}))
    }

    renderButton() {
      if(this.state.startRecord === true) {
        const active = this.state.startRecord
        return (
          <ModalRecordAudio active={active} />
        );
      }
    }

    render() {
      return (
        <div>
            <button onClick={() => this.openRecordModal()}>Record</button>
            {this.renderButton()}
        </div>
      );
    }
  }
