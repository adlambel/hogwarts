import mysql from 'mysql2/promise'
import TestData from './testData'

class Dal {
  async connect() {
    try {
      return await mysql.createConnection({
        host: '0.0.0.0',
        user: 'root',
        password: 'root',
        database: 'db_tests'
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
    }
  }

  async getData() {
    const connection = await this.connect()

    try {
      const [result] = await connection.query('SELECT * FROM table_tests')
      return result
    } catch (err) {
      console.error(err.message)
    } finally {
      connection.end()
    }
  }

  async add(name, age) {
    const connection = await this.connect()

    try {
      const newData = new TestData(null, name, age)
      const [result] = await connection.query(
        `INSERT INTO table_tests (name, age) VALUES ('${name}', '${age}')`
      )

      newData.id = result.insertId

      return newData
    } catch (err) {
      console.error(err.message)
    } finally {
      connection.end()
    }
  }
}

export default Dal
