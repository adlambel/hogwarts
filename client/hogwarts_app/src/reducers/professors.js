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

const professors = (state = [], action) => {

    switch (action.type) {

        case 'INIT':
            return action.payloadProfessors.then((res) => {
                const data = res.data
                state = data
                console.log(data);
                return state
            })

        case 'ADD_PROFESSOR':
            const dataProf = action.payload.then((res) => {
                const data = res.data
                console.log(data);
                return data
            })
            return [
                ...state,
                dataProf
            ]

        case 'REMOVE_PROFESSOR':
            const dataProfR = action.payload.then((res) => {
                const data = res.data
                console.log(data);
                return data
            })
            return state.filter(item => item.id !== dataProfR.id)

        /*
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
        */

        default:
            return state
    }
}

export default professors
