const students = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [
        ...state,
        {
          house: action.house,
          firstName: action.firstName,
          lastName: action.lastName,
          gender: action.gender
        }
      ]

    case 'REMOVE_STUDENT':
      return state.filter(item => item !== action.song)

    default:
      return state
  }  
}
export default students