import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormularStudent from './FormularStudent.js'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { addProfessor } from '../actions'


const PopupAddProfessor = ({ dispatch }) =>  {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const genders = ["F", "M"];

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const classes = useStyles()
const [firstName, setFirstName] = React.useState('')
const [lastName, setLastName] = React.useState('')
const [gender, setGender] = React.useState('')

const handleChangeFirstName= event => {
  setFirstName(event.target.value)
};
const handleChangeLastName= event => {
  setLastName(event.target.value)
};
const handleChangeGender = event => {
  setGender(event.target.value)
};

const verificationInput= () => {
  if(firstName == "" | lastName == "" | gender == "" ){
    return true
  }
  return false
};

  return (
    <div>
      <div className= "center"><AddBoxIcon onClick={handleClickOpen} variant="extended" aria-label="add" style={{color: "#242424", fontSize: "80px", cursor: "pointer"}}/></div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><span className="formularTitle harryFontFamily">ADD A PROFESSOR</span></DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
              <div className="center">
              <div className="formularInput">

                  <TextField id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={handleChangeFirstName}
                    />

                  <TextField id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={handleChangeLastName}
                    />

                    <TextField
                    id="outlined-select-currency"
                    select
                    label="Gender"
                    value={gender}
                    onChange={handleChangeGender}
                    variant="outlined"
                    >
                    {genders.map(option => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </TextField>

              </div>
              </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button disabled={verificationInput()} color="primary" onClick={() => { dispatch(addProfessor( firstName, lastName, gender))}}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default connect(
  
  )(PopupAddProfessor)