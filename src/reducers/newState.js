const newState = (state = [], action) => {
    switch (action.type) {
      case 'ADD_STATE':
        return[
          ...state,
          {
            text: action.payload.text
          }
        ]
      default:
        return state
    }
  }
  
  export default newState