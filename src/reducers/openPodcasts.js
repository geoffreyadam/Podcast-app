const openPodcasts = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
        if(action.payload.modalOpen === "Record"){
          return false
        }else{
          return true
        }
    default:
      return state
  }
}

export default openPodcasts
