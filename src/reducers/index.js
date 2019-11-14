import { combineReducers } from 'redux';
import podcasts from './savePodcast';
import openModal from './openModal';
import openPodcasts from './openPodcasts';

export default combineReducers({
  podcasts,
  openModal,
  openPodcasts
})