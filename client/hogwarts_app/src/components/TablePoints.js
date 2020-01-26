import React from 'react'
import { connect } from 'react-redux'
import Moment from 'moment';
import iconGryffondor from '../images/icons/Icone_de_Gryffondor.png'
import iconPoufsouffle from '../images/icons/Icone_de_Poufsouffle.png'
import iconSerdaigle from '../images/icons/Icone_de_Serdaigle.png'
import iconSerpentard from '../images/icons/Icone_de_Serpentard.png'


const TablePoints = ({ dispatch, points }) => {

    const getImgHouse = (houseName) => {
        switch (houseName) {
            case 'Gryffindor':
              return <img src={iconGryffondor} className="houseIcon" alt="icon" />
        
            case 'Hufflepuff':
            return <img src={iconPoufsouffle} className="houseIcon" alt="icon" />
        
            case 'Ravenclaw':
                return <img src={iconSerdaigle} className="houseIcon" alt="icon" />
            
            case 'Slytherin':
                return <img src={iconSerpentard} className="houseIcon" alt="icon" />
                
            default:
              return 
          }  
    }

    return (
        <div className="tableStudentsProfessors column">
            <div className="harryFontFamily">HISTORICAL</div>
            <table>
                <thead>
                    <tr>
                        <th>House</th>
                        <th>Professor</th>
                        <th>Points</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map(point => (
                        <tr key={point.id}>
                            <td>{getImgHouse(point.house)}</td>
                            <td>{point.profname}</td>
                            <td>{point.value}</td>
                            <td>{Moment(point.date).format('DD/MM/YYYY')}</td>
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

