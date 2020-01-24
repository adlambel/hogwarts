import { createConnection } from 'typeorm'
import Professor from '../src/models/professor'
import Student from '../src/models/student'
import Log from '../src/models/log'
import { professorSchema } from '../src/models/schema/professorSchema'
import { logSchema } from '../src/models/schema/logSchema'
import { studentSchema } from '../src/models/schema/studentSchema'

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
        entities: [professorSchema, logSchema, studentSchema]
      })
    } catch (err) {
      console.error('Unable to connect')
      throw err
    }
  }

  async getProfessor() {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Professor)
      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async getStudent() {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Student)
      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async addProfessor(name, age) {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Professor)
      const newData = new Professor(null, name, age)
      await dataRepository.save(newData)
      return newData
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async removeProfessor(id) {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Professor)
      const res = await dataRepository.delete(id)
      return res
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async addStudent(house, name, age) {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Student)
      const newData = new Student(null, house, name, age)
      await dataRepository.save(newData)
      return newData
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async removeStudent(id) {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Student)
      const res = await dataRepository.delete(id)
      return res
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async getScores() {
    const connection = await this.connect()
    try {
      const dataRepository = connection.query("SELECT house, value, COUNT(*) FROM Log GROUP BY house;")  

      // TODO
      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }
  
  async addScore( professor, house, value ) {
    const connection = await this.connect()
    try {
      const dataRepository = connection.getRepository(Log)
      const newData = new Log(null, house, professor, value)
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
