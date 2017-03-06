import Express from 'express'
import BodyParser from 'body-parser'
import Compression from 'compression'
import CORS from 'express-cors'
import fs from 'fs'
import path from 'path'

const Router = Express.Router()
Router.route('/images/json').get(function (req, res) {
  const earlyYearsDataFile = path.join(__dirname, 'images.json')
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
App.use('/todays_force', Express.static(path.join(__dirname, '/todays_force')))
App.use('/early_years', Express.static(path.join(__dirname, '/early_years')))
App.use('/modern_era', Express.static(path.join(__dirname, '/modern_era')))
App.use('/', Router)

App.listen(3030)
