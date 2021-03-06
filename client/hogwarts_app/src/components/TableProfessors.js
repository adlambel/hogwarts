import React from 'react'
import { connect } from 'react-redux'
import { removeProfessor } from '../actions'
import PopupAddProfessor from './PopupAddProfessor.js'


import ClearIcon from '@material-ui/icons/Clear'


const TableProfessors = ({ dispatch, professors }) => {

    return (
        <div className="tableStudentsProfessors column">
            <div className="harryFontFamily">PROFESSORS </div>
            <PopupAddProfessor/>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {professors.map(professor => (
                        <tr key={professor.id} >
                            <td>{professor.firstname}</td>
                            <td>{professor.lastname}</td>
                            <td>{professor.gender}</td>
                            <td><ClearIcon style={{color: "#707070", fontSize: "40px", cursor: "pointer"}} onClick={() => { dispatch(removeProfessor(professor.id))}}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    professors: state.professors
})

export default connect(
    mapStateToProps
)(TableProfessors)
