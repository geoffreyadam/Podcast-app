import { combineReducers } from 'redux';
import podcasts from './savePodcast';
import openModal from './openModal';

export default combineReducers({
  podcasts,
  openModal
})