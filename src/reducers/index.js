import { combineReducers } from 'redux';
import podcasts from './savePodcast';
import openModal from './openModal';
import openPodcasts from './openPodcasts';
import openPodcastModal from './openPodcastModal'

export default combineReducers({
  podcasts,
  openModal,
  openPodcasts,
  openPodcastModal
})