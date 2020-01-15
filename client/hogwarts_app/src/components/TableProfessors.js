import React from 'react'

import ClearIcon from '@material-ui/icons/Clear'


const TableProfessors = () => {

    return (
        <div className="tableStudentsProfessors column">
            <div className="harryFontFamily">PROFESSORS</div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td>F</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
                <tr>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td>M</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
                <tr>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td>F</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
                <tr>
                    <td>Dupont</td>
                    <td>Jean</td>
                    <td>M</td>
                    <td><ClearIcon style={{color: "#707070", fontSize: "40px"}}/></td>
                </tr>
            </table>
        </div>
    )
}

export default TableProfessors
