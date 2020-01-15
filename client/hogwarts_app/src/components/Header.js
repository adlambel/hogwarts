import React from 'react'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { selecteBody } from '../actions'


const Header = ({ dispatch, selectedBody }) => {

  return (
    <div  className="header">
        <span>{ selectedBody.firstBody }</span>
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

export default connect()(Header)