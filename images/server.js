import Express from 'express'
import BodyParser from 'body-parser'
import Compression from 'compression'
import CORS from 'express-cors'
import fs from 'fs'
import path from 'path'

const Router = Express.Router()
Router.route('/early-years/json').get(function (req, res) {
  const earlyYearsDataFile = path.join(__dirname, 'early-years.json')
  const readable = fs.createReadStream(earlyYearsDataFile)
  readable.pipe(res)
})

Router.route('/todays-force/json').get(function (req, res) {
  const earlyYearsDataFile = path.join(__dirname, 'todays-force.json')
  const readable = fs.createReadStream(earlyYearsDataFile)
  readable.pipe(res)
})

Router.route('/modern-era/json').get(function (req, res) {
  const earlyYearsDataFile = path.join(__dirname, 'modern-era.json')
  const readable = fs.createReadStream(earlyYearsDataFile)
  readable.pipe(res)
})

let App = Express()
App.use(Compression())
App.use(BodyParser.json())
App.use(BodyParser.urlencoded({'extended': false}))
App.use(CORS({
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:3030'
  ]
}))
App.use('/todays-force', Express.static(path.join(__dirname, '/todays-force')))
App.use('/early-years', Express.static(path.join(__dirname, '/early-years')))
App.use('/modern-era', Express.static(path.join(__dirname, '/modern-era')))
App.use('/', Router)

App.listen(3030)
