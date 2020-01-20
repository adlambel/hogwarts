import TestData from './testData'
import { EntitySchema } from 'typeorm'

export const testDataSchema = new EntitySchema({
  tableName: 'table_tests',
  name: 'testData',
  target: TestData,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'int'
    },
    name: {
      type: 'varchar',
      nullable: false
    },
    age: {
      type: 'int',
      nullable: false
    }
  }
})
