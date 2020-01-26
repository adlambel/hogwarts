import React from 'react'
import {connect} from 'react-redux'
import House from './House.js'
import blazonGryffondor from '../images/blazons/Blason_de_Gryffondor.png'
import blazonPoufsouffle from '../images/blazons/Blason_de_Poufsouffle.png'
import blazonSerdaigle from '../images/blazons/Blason_de_Serdaigle.png'
import blazonSerpentard from '../images/blazons/Blason_de_Serpentard.png'


const Home = ({points}) => {

    const getHousePoint = (housename) => {
        const filteredpoints = points.filter(item => item.house === housename)
        let sumFilteredpoints = 0
        filteredpoints.map(point => (sumFilteredpoints += parseInt(point.value)))
        return sumFilteredpoints
    }

    return (
        <div className="home row">
            <House blazonName="Gryffindor" blazonImage={blazonGryffondor} blazonColor="#B41B19"
                   secondaryBlazonColor="#470507" housePoints={getHousePoint("Gryffindor")}/>
            <House blazonName="Ravenclaw" blazonImage={blazonSerdaigle} blazonColor="#0981A6"
                   secondaryBlazonColor="#0B2B38" housePoints={getHousePoint("Ravenclaw")}/>
            <House blazonName="Slytherin" blazonImage={blazonSerpentard} blazonColor="#259F48"
                   secondaryBlazonColor="#112114" housePoints={getHousePoint("Slytherin")}/>
            <House blazonName="Hufflepuff" blazonImage={blazonPoufsouffle} blazonColor="#F5D20E"
                   secondaryBlazonColor="#966B28" housePoints={getHousePoint("Hufflepuff")}/>
        </div>
    )
}

const mapStateToProps = state => ({
    points: state.points
})

export default connect(
    mapStateToProps
)(Home)
