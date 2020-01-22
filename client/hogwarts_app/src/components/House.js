import React from 'react'


const House = ({blazonName, blazonImage, blazonColor, secondaryBlazonColor, housePoints}) => {

  return (
    <div  className="house center" style={{ backgroundColor: blazonColor }}>
      <div>
        <div className="houseBlazon center">
          <div>
            <span className="harryFontFamily" style={{ color: secondaryBlazonColor }}>{blazonName}</span>
            <br/>
            <img src={blazonImage} alt="blazon" />
          </div>
        </div>
        <div className="column">
          <span className="harryFontFamily pointsNumber">{housePoints}</span>
          <span className="points">POINTS</span>
        </div>
      </div>
    </div>
  )
}

export default House