const openModal = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
        if(state === true){
          return false
        }else{
          return true
        }
    default:
      return state
  }
}

export default openModal
