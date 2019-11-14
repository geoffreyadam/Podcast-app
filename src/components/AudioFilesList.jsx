import React,  { useState } from 'react';
import { connect } from 'react-redux';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const AudioFilesList = ({openModal, podcasts}) => {

    const [setPlay] = useState(false);
    const [setPause] = useState(true);
    const [url, setUrl] = useState("");
    const [audio, setAudio] = useState(true);

    // const playFile = (url) =>{
    //     setPlay(true);
    //     setPause(false);
    //     setUrl(url);
    //     setAudio(new Audio(url));
    //     audio.playFile();
    // }
    // const pauseFile = event =>{
    //     this.setState({ play: false, pause: true });
    //     this.audio.pause();
    // }

    console.log(podcasts);

    if(podcasts.length > 0){
      console.log()
      if(url != podcasts[0].url){
        setUrl(podcasts[0].url)
      }
    }

    const options = {
      //audio lists model
      audioLists: [
        {
          name: 'Your Podcast',
          singer: 'You',
          musicSrc: url
        }
      ]
    }



      const AudioFiles = podcasts.map((file, i) => 
        <div key={i}>
          <li>Play podcast</li>
        </div>
        );

    return (
        <React.Fragment>
            <section className="audioFilesList">
            <ReactJkMusicPlayer {...options} />,

            <ul>
                {AudioFiles}
            </ul>
            </section>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts
})
  

  export default connect(
    mapStateToProps,

  )(AudioFilesList)