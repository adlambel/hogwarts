import React from 'react'

import TableStudents from './TableStudents.js'
import TableProfessors from './TableProfessors.js'


const Members = () => {

  return (
    <div className="members">
      <TableStudents />
      <TableProfessors />
    </div>
  )
}

export default Members
