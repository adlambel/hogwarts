import Log from '../log'
import { EntitySchema } from 'typeorm'

export const logSchema = new EntitySchema({
  tableName: 'logs',
  name: 'log',
  target: Log,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
    house: {
      type: 'varchar',
      nullable: false
    },
    professor: {
      type: 'int',
      nullable: false
    },
    date: {
      type: 'datetime',
      nullable: false
    },
    isAdd: {
      type: 'boolean',
      nullable: false
    },
    value: {
      type: 'int',
      nullable: false
    }
  }
})
