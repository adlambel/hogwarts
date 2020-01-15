import React from 'react'

import Table from './Table.js'


const Members = () => {

  return (
    <div className="members">
        <Table className="studentsTable table MuiPaper-elevation0"/>
        <Table className="professorsTable table MuiPaper-elevation0" />
    </div>
  )
}

export default Members