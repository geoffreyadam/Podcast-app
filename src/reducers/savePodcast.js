const podcasts = (state = [], action) => {
    switch (action.type) {
      case 'SAVE_PODCAST':
        return[
          ...state,
          {
            url: action.payload.url
          }
        ]
      default:
        return state
    }
  }
  
  export default podcasts