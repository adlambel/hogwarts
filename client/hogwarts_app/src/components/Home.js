import React from 'react'

import House from './House.js'

import blazonGryffondor from '../images/Blason_de_Gryffondor.png'
import blazonPoufsouffle from '../images/Blason_de_Poufsouffle.png'
import blazonSerdaigle from '../images/Blason_de_Serdaigle.png'
import blazonSerpentard from '../images/Blason_de_Serpentard.png'


const Home = () => {

  return (
    <div className="home row">
        <House blazonName="Gryffondor" blazonImage={blazonGryffondor} blazonColor="#B41B19" secondaryBlazonColor="#470507" />
        <House blazonName="Serdaigle" blazonImage={blazonSerdaigle} blazonColor="#0981A6" secondaryBlazonColor="#0B2B38" />
        <House blazonName="Serpentard" blazonImage={blazonSerpentard} blazonColor="#259F48" secondaryBlazonColor="#112114" />
        <House blazonName="Poufsouffle" blazonImage={blazonPoufsouffle} blazonColor="#F5D20E" secondaryBlazonColor="#966B28" />
    </div>
  )
}

export default Home