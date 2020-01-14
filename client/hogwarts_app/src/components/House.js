import React from 'react'


const House = ({blazonName, blazonImage, blazonColor}) => {

  return (
    <div  className="house" style={{ backgroundColor: blazonColor }}>
        <img src={blazonImage} className="houseBlazon" alt="blazon" />
        <span>{blazonName}</span>
        <span>...points...</span>
    </div>
  )
}

export default House