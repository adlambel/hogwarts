import Log from './testData'
import { EntitySchema } from 'typeorm'

export const testDataSchema = new EntitySchema({
  tableName: 'house_logs',
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
