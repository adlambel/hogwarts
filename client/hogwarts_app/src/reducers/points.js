const points = (state = [], action) => {

  switch (action.type) {
    case 'INITL_SUCCESS':
      return action.payload.data

    case 'INITL_FAIL':
      console.log('error init points')
      break;

    case 'ADD_POINTS_SUCCESS':
      return [...state, action.payload.data]

    case 'ADD_POINTS_FAIL':
      console.log('error add points')
      break;

    default:
      return state
  }  
}

export default points
