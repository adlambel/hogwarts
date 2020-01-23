import React from 'react'

//import Table from './Table.js'
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

/*
<div className="members">
<TableEleves className="studentsTable table MuiPaper-elevation0"/>
<Table className="professorsTable table MuiPaper-elevation0" />
</div>
*/