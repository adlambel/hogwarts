import React from 'react'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { selecteBody } from '../actions'


const Header = ({ dispatch, selectedBody }) => {

  const getHeader = () =>{
    if(selectedBody.firstBody === "Home"){
        return (
            <div className="headerButtonsContainer">
              <Fab className="button" variant="extended" onClick={() => { dispatch(selecteBody(selectedBody.secondBody))}}>
                { selectedBody.secondBody }
                <NavigateNextIcon />
              </Fab>
              <Fab className="button" variant="extended" onClick={() => { dispatch(selecteBody(selectedBody.thirdBody))}}>
                { selectedBody.thirdBody }
                <NavigateNextIcon />
              </Fab>
            </div>
        )
    }
    else{
        return (
          <div className="headerButtonsContainer">
            <Fab className="button" variant="extended" onClick={() => { dispatch(selecteBody(selectedBody.secondBody))}}>
              { selectedBody.secondBody }
              <NavigateNextIcon />
            </Fab>
          </div>
        )
    }
}

  return (
    <div className="header center">
      <div className="heardeName harryFontFamily center">{ selectedBody.firstBody }</div>
        {getHeader()}
    </div>
  )
}

export default connect()(Header)