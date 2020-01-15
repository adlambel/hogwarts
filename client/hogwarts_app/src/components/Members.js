import React from 'react'

import AddBoxIcon from '@material-ui/icons/AddBox';
import Table from './Table.js'
import TableStudents from './TableStudents.js'
import TableProfessors from './TableProfessors.js'


const Members = () => {

  return (
    <div className="members">
      <TableStudents />
      <div className= "addStudentProfessor">
        <div className= "center"><AddBoxIcon style={{color: "#242424", fontSize: "80px"}}/></div>
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