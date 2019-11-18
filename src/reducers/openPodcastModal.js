const openPodcastModal = (state = false, action) => {
    switch (action.type) {
      case 'OPEN_PODCAST':
          if(action.payload.audioFile !== true){
            return action.payload.audioFile
          }else{
              return false
          }
      default:
        return false
    }
  }
  
  export default openPodcastModal
  