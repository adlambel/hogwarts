const points = (state = [], action) => {
  state = [
    {
      id: 1,
      house: "Gryffondor",
      professor: "prof",
      points: "43"
    },
    {
      id: 2,
      house: "Serdaigle",
      professor: "prof",
      points: "3"
    }
  ]
  switch (action.type) {
    case 'ADD_POINTS':
      return [
        ...state,
        {
          id: 3,
          house: action.house,
          professor: action.professor,
          points: action.points
        }
      ]

    case 'REMOVE_POINTS':
      //return state.filter(item => item !== action.song)

    default:
      return state
  }  
}
export default points