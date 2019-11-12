import React,  { useState } from 'react';
import { connect } from 'react-redux';
import MusicPlayer from 'react-responsive-music-player';

const AudioFilesList = ({openModal}) => {

    const [setPlay] = useState(false);
    const [setPause] = useState(true);
    const [url, setUrl] = useState(true);
    const [audio, setAudio] = useState(true);

    const playFile = (url) =>{
        setPlay(true);
        setPause(false);
        setUrl(url);
        setAudio(new Audio(url));
        audio.playFile();
    }

    const playlist = [
        {
          url: url[0],
          cover: 'path/to/jpg',
          title: 'Despacito',
          artist: [
            'Luis Fonsi',
            'Daddy Yankee'
          ]
        }
      ]

    // const pauseFile = event =>{
    //     this.setState({ play: false, pause: true });
    //     this.audio.pause();
    // }

//     const AudioFiles = openModal.map((file, i) => 
//         <div key={i}>
// <li value={file} onClick={() => playFile(file)}>Play track{file.text}</li>
//         </div>
//     );
    return (
        <React.Fragment>
            <section className="audioFilesList">
                {/* {AudioFiles} */}
                <MusicPlayer playlist={playlist} />
                {/* {AudioFiles.map((task, index) => {
                    const front = 
                        <div key={index}>
                            <span>{task.text}</span>
                        </div> 
                    return front;
                } */}
            </section>
        </React.Fragment>
    );
}

  const mapStateToProps = (state) => ({
    openModal: state.openModal
  })
  

  export default connect(
    mapStateToProps,

  )(AudioFilesList)