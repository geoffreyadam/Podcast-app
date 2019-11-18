import React from 'react';
import { connect } from 'react-redux';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {openPodcastModal} from "../actions/index";

const AudioFilesList = ({openPodcastModal, changeOpenPodcastModal}) => {

  const options = {
    audioLists: [
      {
        name: 'Your Podcast',
        singer: 'You',
        musicSrc: openPodcastModal
      }
    ]
  }

      const podcastModal = () => {
        changeOpenPodcastModal(true)
      };

    return (
      <>
        <section className="modalPodcast">
          <h2>Podcast</h2>
          <ReactJkMusicPlayer {...options} />
          <button onClick={podcastModal}>Close podcast</button>
        </section>
      </>
    );
}

const mapStateToProps = (state) => ({
  openPodcastModal: state.openPodcastModal
})

const mapDispatchToProps = dispatch => ({
  changeOpenPodcastModal: audioFile => dispatch(openPodcastModal(audioFile))
})
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AudioFilesList)