import express from 'express'
import fs from 'fs'
import path from 'path'
import bodyParser from 'body-parser'
import Dal from './typeOrmDal'
import Professor from './models/professor'

const app = express()

app.use(bodyParser.json())
app.use(function(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', async (_, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    // console.log(data);
  })
});

app.get('/professor', async (_, res) => {
  const dal = new Dal()
  const data = await dal.getProfessor()
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

app.get('/student', async (_, res) => {
  const dal = new Dal()
  const data = await dal.getStudent()
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

app.post('/professor/:name/:gender', async (req, res) => {
  const { name, gender } = req.params
  const dal = new Dal()
  const newData = await dal.addProfessor(name, parseInt(gender))
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

app.post('/student/:house/:name/:gender', async (req, res) => {
  const { name, gender } = req.params
  const dal = new Dal()
  const newData = await dal.addStudent(house, name, parseInt(gender))
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

app.delete('/professor/:id', async (req, res) => {
  const id = req.params;
  const dal = new Dal()
  const newData = await dal.removeProfessor(id)
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

app.delete('/student/:id', async (req, res) => {
  const id = req.params;
  const dal = new Dal()
  const newData = await dal.removeStudent(id)
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

app.get('/scores', async (_, res) => {
  const dal = new Dal()
  const data = await dal.getScores()
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

app.post('/scores/:professor/:house/:value', async (_, res) => {
  const dal = new Dal()
  const { professor, house, value } = req.params
  const data = await dal.addScore( professor, house, value );
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

export default app
