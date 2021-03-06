import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { addPoints } from '../actions'
import Fab from '@material-ui/core/Fab'

import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'


const houses = [
  {
    img: {iconGryffondor},
    value: 'Gryffindor',
  },
  {
    img: {iconSerdaigle},
    value: 'Ravenclaw',
  },
  {
    img: {iconSerpentard},
    value: 'Slytherin',
  },
  {
    img: {iconPoufsouffle},
    value: 'Hufflepuff',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
  


const FormularPoints = ({ dispatch, professors }) => {
    const classes = useStyles()
    const [house, setHouse] = React.useState('')
    const [professor, setProfessor] = React.useState('')
    const [points, setPoints] = React.useState('')

    const handleChangeHouse = event => {
        setHouse(event.target.value)
    };
    const handleChangeProfessor = event => {
        setProfessor(event.target.value)
    };
    const handleChangePoints= event => {
        setPoints(event.target.value)
    };
    const handleSave= () => {
        dispatch(addPoints(house, professor, points))
        setHouse("")
        setProfessor("")
        setPoints("")
    };
  
    const concatProfessor= (firstName, lastName) => {
      return firstName + " " + lastName
    };
  
    const verificationInput= () => {
      if(house === "" | professor === "" | points === "" | isNaN(points)){
        return true
      }
      return false
    };

    return (
        <div className="tableAddPoints column">
            <div className="formularTitle harryFontFamily">POINTS FORMULAR</div>


          <form className={classes.root} noValidate autoComplete="off">
              <div className="center">
              <div className="formularInput">
                  <TextField
                  id="outlined-select-currency"
                  select
                  label="House"
                  value={house}
                  onChange={handleChangeHouse}
                  variant="outlined"
                  >
                  {houses.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.value}
                      </MenuItem>
                  ))}
                  </TextField>

                  <TextField
                  id="outlined-select-currency"
                  select
                  label="Professor"
                  value={professor}
                  onChange={handleChangeProfessor}
                  variant="outlined"
                  >
                  {professors.map(option => (
                      <MenuItem key={option.id} value={concatProfessor(option.firstname, option.lastname)}>
                      {concatProfessor(option.firstname, option.lastname)}
                      </MenuItem>
                  ))}
                  </TextField>

                  <TextField id="outlined-basic"
                  label="Points"
                  variant="outlined"
                  value={points}
                  type='number'
                  onChange={handleChangePoints}
                    />

              </div>
              </div>
          </form>

          <Fab className="button" variant="extended" disabled={verificationInput()} onClick={() => {handleSave()}}>
              save
            </Fab>

        </div>
    )
}

const mapStateToProps = state => ({
  professors: state.professors
})

export default connect(
  mapStateToProps
)(FormularPoints)

