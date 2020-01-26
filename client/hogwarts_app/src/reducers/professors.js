const professors = (state = [], action) => {

    switch (action.type) {

        case 'INITP_SUCCESS':
            console.log(action.payload.data)
            return action.payload.data

        case 'INITP_FAIL':
            console.log('error init prof')
            break;

        case 'ADD_PROFESSOR_SUCCESS':
            return [action.payload.data, ...state]

        case 'ADD_PROFESSOR_FAIL':
            break;

        case 'REMOVE_PROFESSOR_SUCCESS':
            return state.filter(item => item.id != action.payload.data.id)

        case 'REMOVE_PROFESSOR_FAIL':
            break;

        default:
            return state
    }
}

export default professors
