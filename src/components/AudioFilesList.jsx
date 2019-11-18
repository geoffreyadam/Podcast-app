import React,  { useState } from 'react';
import { connect } from 'react-redux';
import {openPodcastModal} from "../actions/index";
import ModalPocast from './ModalPodcast.jsx';

const AudioFilesList = ({podcasts, openPodcastModal, changeOpenPodcastModal}) => {

    const [url, setUrl] = useState("");

    if(podcasts.length > 0){
      if(url !== podcasts[0].url){
        setUrl(podcasts[0].url)
      }
    }

      const AudioFiles = podcasts.map((url, i) => {
        return <div onClick={() => changeOpenPodcastModal(url.url)} key={i}>
          <li>Play podcast</li>
        </div>
        });

    const ShowPodcastModal = () => {
      if(openPodcastModal !== false){
        return <ModalPocast />
      }else{
        return false
      }
    }

    return (
        <React.Fragment>
            <section className="audioFilesList">
            <ul>
                {AudioFiles}
            </ul>
            <ShowPodcastModal />
            </section>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts,
  openPodcastModal: state.openPodcastModal
})

const mapDispatchToProps = dispatch => ({
  changeOpenPodcastModal: audioFile => dispatch(openPodcastModal(audioFile))
})
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AudioFilesList)