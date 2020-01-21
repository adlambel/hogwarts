import { createConnection } from 'typeorm'
import TestData from '../src/models/log'
import { testDataSchema } from '../src/models/schema/logSchema'

class TypeOrmDal {
  async connect() {
    try {
      return await createConnection({
        type: 'mysql',
        host: '0.0.0.0',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_tests',
        entities: [testDataSchema]
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
    }
  }

  async getData() {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(TestData)

      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async add(name, age) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(TestData)
      const newData = new TestData(null, name, age)

      await dataRepository.save(newData)
      return newData
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }
}

export default TypeOrmDal
