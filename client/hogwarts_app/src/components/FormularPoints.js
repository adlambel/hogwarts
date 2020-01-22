import React from 'react'
import { connect } from 'react-redux'
import { removePoints } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'


const houses = [
    {
      img: {iconGryffondor},
      value: 'Gryffondor',
    },
    {
      img: {iconPoufsouffle},
      value: 'Poufsouffle',
    },
    {
      img: {iconSerdaigle},
      value: 'Serdaigle',
    },
    {
      img: {iconSerpentard},
      value: 'Serpentard',
    },
  ];

  const professorst = [
    {
      firstName: 'firstName',
      lastName: 'lastName',
      value: 'firstName'+' '+'lastName',
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      value: 'firstName'+' '+'lastName',
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      value: 'firstName'+' '+'lastName',
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      value: 'firstName'+' '+'lastName',
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
        console.log(event.target.value)
    };
    const handleChangePoints= event => {
        setPoints(event.target.value)
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
                        helperText="Please select a house"
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
                        helperText="Please select a professor"
                        variant="outlined"
                        >
                        {professorst.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.firstName} {option.lastName}
                            </MenuItem>
                        ))}
                        </TextField>

                        <TextField id="outlined-basic"
                        label="Points"
                        variant="outlined"
                        value={points}
                        onChange={handleChangePoints}
                        helperText="Please enter a number of points"
                         />

                    </div>
                    </div>
                </form>


        </div>
    )
}

const mapStateToProps = state => ({
  professors: state.professors
})

export default connect(
  mapStateToProps
)(FormularPoints)

