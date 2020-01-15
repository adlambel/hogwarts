import React from 'react'

import Table from './Table.js'


const Members = () => {

  return (
    <div className="members">
        <Table className="studentsTable" />
        <Table className="professorsTable" />
    </div>
  )
}

export default Members