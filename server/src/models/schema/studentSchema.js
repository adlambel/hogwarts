import Student from '../student'
import { EntitySchema } from 'typeorm'

export const studentSchema = new EntitySchema({
  tableName: 'students',
  name: 'student',
  target: Student,
  // extends: People,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
    fullname: {
      type: 'varchar',
      nullable: false
    },
    gender: {
      type: 'char',
      nullable: false
    },
    house: {
      type: 'varchar',
      nullable: false
    }
    
  }
})
