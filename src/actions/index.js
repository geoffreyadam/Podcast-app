export const savePodcast = (url) => ({
  type: 'SAVE_PODCAST',
  payload: {
    url
  }
})

export const openModal = (modalOpen) => ({
  type: 'OPEN_MODAL',
  payload: {
    modalOpen
  }
})

export const openPodcastModal = (audioFile) => ({
  type: 'OPEN_PODCAST',
  payload: {
    audioFile
  }
})