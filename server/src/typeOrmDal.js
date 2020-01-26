import {createConnection} from 'typeorm'
import Professor from '../src/models/professor'
import Student from '../src/models/student'
import Log from '../src/models/log'
import {professorSchema} from '../src/models/schema/professorSchema'
import {logSchema} from '../src/models/schema/logSchema'
import {studentSchema} from '../src/models/schema/studentSchema'

class TypeOrmDal {

    constructor() {
        this.connection = null;
    }

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
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Professor)
            return await dataRepository.find()
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async getStudent() {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Student)
            return await dataRepository.find()
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async addProfessor(firstname, lastname, age) {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Professor)
            const newData = new Professor(null, firstname, lastname, age)
            await dataRepository.save(newData)
            return newData
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async removeProfessor(id) {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Professor)
            const res = await dataRepository.delete(id)
            return id
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async addStudent(house, firstname, lastname, age) {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Student)
            const newData = new Student(null, house, firstname, lastname, age)
            await dataRepository.save(newData)
            return newData
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async removeStudent(id) {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Student)
            const res = await dataRepository.delete(id)
            return res
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async getLogs() {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Log)
            return await dataRepository.find({
                order: {
                    date: "DESC"
                }
            })
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async getScores() {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const res = await this.connection.query("SELECT house, SUM(value) as value FROM Logs GROUP BY house;")
            return res
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

    async addScore(profname, house, value) {
        if(!this.connection)
            this.connection = await this.connect();
        try {
            const dataRepository = this.connection.getRepository(Log)
            const newData = new Log(null, house, profname, value)
            await dataRepository.save(newData)
            return newData
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }

}

export default TypeOrmDal
