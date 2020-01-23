import React from 'react'
import { connect } from 'react-redux'
import { removeStudent } from '../actions'

import ClearIcon from '@material-ui/icons/Clear'
import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'


const TableStudents = ({ dispatch, students }) => {

    const getImgHouse = (houseName) => {
        switch (houseName) {
            case 'Gryffondor':
              return <img src={iconGryffondor} className="houseIcon" alt="icon" />
        
            case 'Poufsouffle':
            return <img src={iconPoufsouffle} className="houseIcon" alt="icon" />
        
            case 'Serdaigle':
                return <img src={iconSerdaigle} className="houseIcon" alt="icon" />
            
            case 'Serpentard':
                return <img src={iconSerpentard} className="houseIcon" alt="icon" />
                
            default:
              return 
          }  
    }

    return (
        <div className="tableStudentsProfessors column">
            <div className="harryFontFamily">STUDENTS</div>
            <table>
                <thead>
                    <tr>
                        <th>House</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} >
                            <td>{getImgHouse(student.house)}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.gender}</td>
                            <td><ClearIcon style={{color: "#707070", fontSize: "40px"}} onClick={() => { dispatch(removeStudent(student.id))}}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    students: state.students
})

export default connect(
    mapStateToProps
)(TableStudents)
