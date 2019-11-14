const openModal = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      if(action.payload.modalOpen === "Podcasts"){
        return false
      }else{
        return true
      }

    default:
      return state
  }
}

export default openModal
