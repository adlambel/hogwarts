const init = [
  {
    id: 1,
    house: "Gryffondor",
    firstName: "nameTest1",
    lastName: "lastNameTest1",
    gender: "M"
  },
  {
    id: 2,
    house: "Poufsouffle",
    firstName: "nameTest2",
    lastName: "lastNameTest2",
    gender: "F"
  }
]
let id = 2

const students = (state = init, action) => {

  switch (action.type) {
    case 'ADD_STUDENT':
      ++id
      return [
        ...state,
        {
          id: id,
          house: action.house,
          firstName: action.firstName.toLowerCase(),
          lastName: action.lastName.toUpperCase(),
          gender: action.gender
        }
      ]

    case 'REMOVE_STUDENT':
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }  
}
export default students