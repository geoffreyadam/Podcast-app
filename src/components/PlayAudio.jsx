import React from 'react';
import AudioFilesList from './AudioFilesList'


export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTrack: null
    }
   
    }
    render() {
      return (
        <>
          <AudioFilesList />
        </>
      );
    }
  }

