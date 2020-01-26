import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import Dal from './typeOrmDal'



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

app.use(express.static(path.join(__dirname,'../build')));

app.get('/', async (_, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
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

app.post('/professor', async (req, res) => {
  const { firstname, lastname, gender } = req.query
  const dal = new Dal()
  const newData = await dal.addProfessor(firstname, lastname, gender)
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

app.post('/student', async (req, res) => {
  const { house, firstname, lastname, gender } = req.query
  const dal = new Dal()
  const newData = await dal.addStudent(house, firstname, lastname, gender)
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

app.delete('/professor', async (req, res) => {
  const id = req.query;
  const dal = new Dal()
  const newData = await dal.removeProfessor(id)
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(id)
})

app.delete('/student', async (req, res) => {
  const id = req.query;
  const dal = new Dal()
  const newData = await dal.removeStudent(id)
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(id)
})

app.get('/logs', async (_, res) => {
  const dal = new Dal()
  const data = await dal.getLogs()
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})


app.get('/scores', async (_, res) => {
  const dal = new Dal()
  const data = await dal.getScores()
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

app.post('/scores', async (req, res) => {
  const dal = new Dal()
  const {profname, house, value } = req.query
  const data = await dal.addScore(profname, house, value );
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

export default app
