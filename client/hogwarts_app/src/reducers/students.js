const students = (state = [], action) => {
  state = [
    {
      id: 1,
      house: "houseTest1",
      firstName: "nameTest1",
      lastName: "lastNameTest1",
      gender: "genderTest1"
    },
    {
      id: 2,
      house: "houseTest2",
      firstName: "nameTest2",
      lastName: "lastNameTest2",
      gender: "genderTest2"
    }
  ]
  switch (action.type) {
    case 'ADD_STUDENT':
      return [
        ...state,
        {
          id: 3,
          house: action.house,
          firstName: action.firstName,
          lastName: action.lastName,
          gender: action.gender
        }
      ]

    case 'REMOVE_STUDENT':
      //return state.filter(item => item !== action.song)

    default:
      return state
  }  
}
export default students