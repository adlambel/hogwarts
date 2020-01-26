import React from 'react'

import TableStudents from './TableStudents.js'
import TableProfessors from './TableProfessors.js'
import PopupAddStudent from './PopupAddStudent.js'
import PopupAddProfessor from './PopupAddProfessor.js'


const Members = () => {

  return (
    <div className="members">
      <TableStudents />
      <div className= "addStudentProfessor">
        <PopupAddStudent/>
        <PopupAddProfessor/>
      </div>
      <TableProfessors />
    </div>
  )
}

export default Members
