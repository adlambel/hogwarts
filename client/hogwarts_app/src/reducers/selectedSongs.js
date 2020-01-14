const selectedSongs = (state = [], action) => {
    switch (action.type) {
      case 'ADD_SONG':
        if(state.find(({text}) => text  === action.text)){
            return state.filter(({text}) => text !== action.text)
        }
        else{
          return [
            ...state,
            {
              text: action.text
            }
          ]
        }

      case 'REMOVE_SONG':
        return state.filter(item => item !== action.song)

      default:
        return state
    }
  }
  export default selectedSongs