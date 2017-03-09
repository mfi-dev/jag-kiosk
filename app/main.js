const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

const Express = require('express')
const BodyParser = require('body-parser')
const Compression = require('compression')
const CORS = require('express-cors')
const fs = require('fs')

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    kiosk: true,
    closable: false,
    enableLargerThanScreen: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    movable: false
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  // mainWindow.webContents.openDevTools()
}

app.commandLine.appendSwitch('--enable-viewport-meta', 'true')
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

const Router = Express.Router()
Router.route('/images/json').get(function (req, res) {
  const dataFile = path.join(__dirname, '/images/images.json')
  const readable = fs.createReadStream(dataFile)
  readable.pipe(res)
})

let ImageServer = Express()
ImageServer.use(Compression())
ImageServer.use(BodyParser.json())
ImageServer.use(BodyParser.urlencoded({'extended': false}))
ImageServer.use(CORS({
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:3030'
  ]
}))
ImageServer.use('/todays_force', Express.static(path.join(__dirname, '/images/todays_force')))
ImageServer.use('/early_years', Express.static(path.join(__dirname, '/images/early_years')))
ImageServer.use('/modern_era', Express.static(path.join(__dirname, '/images/modern_era')))
ImageServer.use('/', Router)
ImageServer.listen(3030)
