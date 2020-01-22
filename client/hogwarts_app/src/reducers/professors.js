const professors = (state = [], action) => {
  state = [
    {
      id: 1,
      firstName: "nameTest1",
      lastName: "lastNameTest1",
      gender: "genderTest1"
    },
    {
      id: 2,
      firstName: "nameTest2",
      lastName: "lastNameTest2",
      gender: "genderTest2"
    }
  ]
  switch (action.type) {
    case 'ADD_PROFESSOR':
      return [
        ...state,
        {
          id: 3,
          firstName: action.firstName,
          lastName: action.lastName,
          gender: action.gender
        }
      ]

    case 'REMOVE_PROFESSOR':
      //return state.filter(item => item !== action.song)

    default:
      return state
  }  
}
export default professors