import Professor from '../professor'
import { EntitySchema } from 'typeorm'

export const professorSchema = new EntitySchema({
  tableName: 'professors',
  name: 'professor',
  target: Professor,
  // extends: People,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
    firstname: {
      type: 'varchar',
      nullable: false
    },
    lastname: {
      type: 'varchar',
      nullable: false
    },
    gender: {
      type: 'char',
      nullable: false
    }
    
  }
})
