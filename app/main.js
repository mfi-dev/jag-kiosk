const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1920, height: 1080, kiosk: false})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function getImageData () {
  const imageLocations = [
    'assets/images/EarlyYears',
    'assets/images/ModernEra',
    'assets/images/TodaysForce'
  ]
  imageLocations.forEach(location => {
    let jsonFileName = './' + location + '/' + location.substr((location.lastIndexOf('/') - location.length) + 1) + '.json'
    let jsonFile = require(jsonFileName)
    let ImageInfo = JSON.parse(JSON.stringify(jsonFile))
    console.log(ImageInfo)
  })
  createWindow()
}

app.on('ready', getImageData)

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
