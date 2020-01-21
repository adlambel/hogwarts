import express from 'express'
import bodyParser from 'body-parser'
import Dal from './models/typeOrmDal'

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
  const dal = new Dal()
  const data = await dal.getData()

  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
})

app.post('/:name/:age', async (req, res) => {
  const { name, age } = req.params
  const dal = new Dal()
  const newData = await dal.add(name, parseInt(age))

  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(newData)
})

export default app
