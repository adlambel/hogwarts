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
            return action.payloadStudents.then((res) => {
                const dataI = res.data
                state = dataI
                console.log(state);
                return state
            })


        case 'ADD_STUDENT':
            const dataStudent = action.payload.then((res) => {
                const dataAdd = res.data
                console.log(dataAdd);
                return dataAdd
            })
            return [
                ...state,
                dataStudent
            ]

        case 'REMOVE_STUDENT':
            const dataStudentR = action.payload.then((res) => {
                const dataR = res.data
                console.log(dataR);
                return dataR
            })
            return state.filter(item => item.id !== dataStudentR.id)

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
