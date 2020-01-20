import React from 'react'

import ClearIcon from '@material-ui/icons/Clear'
import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'


const TablePoints = () => {

    return (
        <div className="tableStudentsProfessors column">
            <div className="harryFontFamily">ADD POINTS</div>
            <table>
                <tr>
                    <th>House</th>
                    <th>Professor</th>
                    <th>Points</th>
                    <th></th>
                </tr>
                <tr>
                    <td><img src={iconGryffondor} className="houseIcon" alt="icon" /></td>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
                <tr>
                    <td><img src={iconPoufsouffle} className="houseIcon" alt="icon" /></td>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
                <tr>
                    <td><img src={iconSerdaigle} className="houseIcon" alt="icon" /></td>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
                <tr>
                    <td><img src={iconSerpentard} className="houseIcon" alt="icon" /></td>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
            </table>
        </div>
    )
}

export default TablePoints
