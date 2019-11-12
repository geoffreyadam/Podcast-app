export const savePodcast = (url) => ({
  type: 'SAVE_PODCAST',
  payload: {
    url
  }
})

export const openModal = () => ({
  type: 'OPEN_MODAL',
})