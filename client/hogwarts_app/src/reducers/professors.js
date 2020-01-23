const init = [
{
  id: 1,
  firstName: "nameTest1",
  lastName: "lastNameTest1",
  gender: "F"
},
{
  id: 2,
  firstName: "nameTest2",
  lastName: "lastNameTest2",
  gender: "F"
}
]
let id = 2

const professors = (state = init, action) => {
 
  switch (action.type) {
    case 'ADD_PROFESSOR':
      ++id
      return [
        ...state,
        {
          id: id,
          firstName: action.firstName.toLowerCase(),
          lastName: action.lastName.toUpperCase(),
          gender: action.gender
        }
      ]

    case 'REMOVE_PROFESSOR':
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }  
}
export default professors