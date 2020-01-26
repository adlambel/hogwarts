const students = (state = [], action) => {

    switch (action.type) {

        case 'INITS_SUCCESS':
            return action.payload.data

        case 'INITS_FAIL':
            console.log('error init')
            break;

        case 'ADD_STUDENT_SUCCESS':
            return [ action.payload.data, ...state]

        case 'ADD_STUDENT_FAIL':
            console.log("error add student")
            break;

        case 'REMOVE_STUDENT_SUCCESS':
            return state.filter(item => item.id != action.payload.data.id)

        case 'REMOVE_STUDENT_FAIL':
            break;

        default:
            return state
    }
}

export default students
