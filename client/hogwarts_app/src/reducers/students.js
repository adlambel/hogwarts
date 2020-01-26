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

const students = (state = [], action) => {

  switch (action.type) {

    case 'INIT':
      action.payloadStudents.then((res) => {
        const data = res.data
        state = data
        console.log(state);
        return state
      })

    case 'ADD_STUDENT':
      const dataStudent = action.payload.then((res) => {
        const data = res.data
        console.log(data);
        return data
      })
      return [
        ...state,
        dataStudent
      ]

    case 'REMOVE_STUDENT':
      const dataStudent = action.payload.then((res) => {
        const data = res.data
        console.log(data);
        return data
      })
      return state.filter(item => item.id !== dataStudent.id)

/*
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
*/

    default:
      return state
  }  
}

export default students