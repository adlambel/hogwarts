import React from 'react'
import { connect } from 'react-redux'
import { removePoints } from '../actions'

import ClearIcon from '@material-ui/icons/Clear'
import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'


const TablePoints = ({ dispatch, points }) => {

    return (
        <div className="tableStudentsProfessors column">
            <div className="harryFontFamily">ADD POINTS</div>
            <table>
                <thead>
                    <tr>
                        <th>House</th>
                        <th>Professor</th>
                        <th>Points</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {points.map(point => (
                        <tr key={point.id} >
                            <td><img src={iconGryffondor} className="houseIcon" alt="icon" /></td>
                            <td>{point.professor}</td>
                            <td>{point.points}</td>
                            <td><ClearIcon style={{color: "#707070", fontSize: "40px"}} onClick={() => { dispatch(removePoints(point.id))}}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    points: state.points
})

export default connect(
    mapStateToProps
)(TablePoints)

