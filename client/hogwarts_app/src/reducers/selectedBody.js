const selectedBody = (state = {}, action) => {
  if(action.type === 'CHANGE_BODY' & action.text === 'Add points'){
    state = {
      firstBody: "Add points",
      secondBody: "Home",
      thirdBody: "Members"
    }
    return state
  }
  if(action.type === 'CHANGE_BODY' & action.text === 'Members'){
    state = {
      firstBody: "Members",
      secondBody: "Home",
      thirdBody: "Add points"
    }
    return state
  }
  else{
    state = {
      firstBody: "Home",
      secondBody: "Add points",
      thirdBody: "Members"
    }
    return state
  }

}
export default selectedBody