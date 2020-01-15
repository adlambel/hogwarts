import React from 'react'

import House from './House.js'

import blazonGryffondor from '../images/Blason_de_Gryffondor.png'
import blazonPoufsouffle from '../images/Blason_de_Poufsouffle.png'
import blazonSerdaigle from '../images/Blason_de_Serdaigle.png'
import blazonSerpentard from '../images/Blason_de_Serpentard.png'


const Home = () => {

  return (
    <div className="home">
        <House blazonName="Gryffondor" blazonImage={blazonGryffondor} blazonColor="#C10404" />
        <House blazonName="Poufsouffle" blazonImage={blazonPoufsouffle} blazonColor="#DEB916" />
        <House blazonName="Serdaigle" blazonImage={blazonSerdaigle} blazonColor="#0F85C1" />
        <House blazonName="Serpentard" blazonImage={blazonSerpentard} blazonColor="#10800D" />
    </div>
  )
}

export default Home