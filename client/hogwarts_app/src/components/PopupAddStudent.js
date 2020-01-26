import React from 'react';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {addStudent} from '../actions'


const PopupAddStudent = ({dispatch}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setGender("");
        setFirstName("");
        setHouse("");
        setLastName("");
    };

    const houses = [
        {
            value: 'Gryffindor',
        },
        {
            value: 'Hufflepuff',
        },
        {
            value: 'Ravenclaw',
        },
        {
            value: 'Slytherin',
        },
    ];

    const genders = [
        "Male",
        "Female",
        "Agender",
        "Androgyne",
        "Androgynous",
        "Bigender",
        "Cis",
        "Cisgender",
        "Cis Female",
        "Cis Male",
        "Cis Man",
        "Cis Woman",
        "Cisgender Female",
        "Cisgender Male",
        "Cisgender Man",
        "Cisgender Woman",
        "Female to Male",
        "FTM",
        "Gender Fluid",
        "Gender Nonconforming",
        "Gender Questioning",
        "Gender Variant",
        "Genderqueer",
        "Intersex",
        "Male to Female",
        "MTF",
        "Neither",
        "Neutrois",
        "Non-binary",
        "Other",
        "Pangender",
        "Trans",
        "Trans*",
        "Trans Female",
        "Trans* Female",
        "Trans Male",
        "Trans* Male",
        "Trans Man",
        "Trans* Man",
        "Trans Person",
        "Trans* Person",
        "Trans Woman",
        "Trans* Woman",
        "Transfeminine",
        "Transgender",
        "Transgender Female",
        "Transgender Male",
        "Transgender Man",
        "Transgender Person",
        "Transgender Woman",
        "Transmasculine",
        "Transsexual",
        "Transsexual Female",
        "Transsexual Male",
        "Transsexual Man",
        "Transsexual Person",
        "Transsexual Woman",
        "Two-Spirit"
    ];

    const useStyles = makeStyles(theme => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    const classes = useStyles()
    const [house, setHouse] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [gender, setGender] = React.useState('')

    const handleChangeHouse = event => {
        setHouse(event.target.value)
    };
    const handleChangeFirstName = event => {
        setFirstName(event.target.value)
    };
    const handleChangeLastName = event => {
        setLastName(event.target.value)
    };
    const handleChangeGender = event => {
        setGender(event.target.value)
    };

    const verificationInput = () => {
        if (house === "" | firstName === "" | lastName === "" | gender === "") {
            return true
        }
        return false
    };

    return (
        <div className="addbtn-container">
            <div className="addbtn"><AddBoxIcon onClick={handleClickOpen} variant="extended" aria-label="add"
                                                style={{color: "#242424", fontSize: "80px", cursor: "pointer"}}/></div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><span className="formularTitle harryFontFamily">ADD A STUDENT</span></DialogTitle>
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

                                <TextField id=""
                                           label="Last Name"
                                           variant="outlined"
                                           value={lastName}
                                           onChange={handleChangeLastName}
                                />

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
                    <Button disabled={verificationInput()} color="primary" onClick={() => {
                        dispatch(addStudent(house, firstName, lastName, gender))
                        handleClose()
                    }}>
                        save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default connect(

)(PopupAddStudent)
