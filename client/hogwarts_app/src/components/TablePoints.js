import React from 'react'
import { connect } from 'react-redux'
import { removePoints } from '../actions'

import ClearIcon from '@material-ui/icons/Clear'
import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'
import { red } from '@material-ui/core/colors'


const TablePoints = ({ dispatch, points }) => {

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

    const activeColor = (active) =>{
        if(!active){
            return "#D3D3D3"
        }
        else{
            return 
        }
    }

    const removeIcon = (active, id) =>{
        if(active){
            return <ClearIcon style={{color: "#707070", fontSize: "40px"}} onClick={() => { dispatch(removePoints(id))}}/>
        }
        else{
            return 
        }
    }

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
                        <tr key={point.id} style={{ color: activeColor(point.active) }}>
                            <td>{getImgHouse(point.house)}</td>
                            <td>{point.professor}</td>
                            <td>{point.points}</td>
                            <td>{removeIcon(point.active, point.id)}</td>
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

