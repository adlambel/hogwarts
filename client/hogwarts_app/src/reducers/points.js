const init = [
  {
    id: 1,
    house: "Gryffondor",
    professor: "prof",
    points: 43,
    active: true
  },
  {
    id: 2,
    house: "Serdaigle",
    professor: "prof",
    points: 3,
    active: true
  }
]
let id = 2

const points = (state = init, action) => {

  switch (action.type) {
    case 'ADD_POINTS':
      ++id
      return [
        ...state,
        {
          id: id,
          house: action.house,
          professor: action.professor,
          points: action.points,
          active: true
        }
      ]

    case 'REMOVE_POINTS':
      for (var i in state) {
        if (state[i].id == action.id) {
          state[i].active = false;
           break
        }
      }
      return state

    default:
      return state
  }  
}
export default points