const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const storage = require('electron-json-storage')
let fs = require('fs')
const path = require('path')
const url = require('url')

let mainWindow
let EarlyYearsImages
let ModernEraImages
let TodaysForceImages

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    kiosk: false,
    closable: true,
    enableLargerThanScreen: true,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    zoomToPageWidth: true,
    movable: true
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  getImageData()
}

function getImageData () {
  const imageLocations = [
    'app/assets/images/EarlyYears',
    'app/assets/images/ModernEra',
    'app/assets/images/TodaysForce'
  ]
  imageLocations.forEach(location => {
    let sectionName = location.substr((location.lastIndexOf('/') - location.length) + 1)
    fs.readdir(location, function (err, items) {
      let jsonImages = JSON.stringify(items)
      switch (sectionName) {
        case 'EarlyYears':
          EarlyYearsImages = jsonImages
          break
        case 'ModernEra':
          ModernEraImages = jsonImages
          console.log(ModernEraImages)
          break
        case 'TodaysForce':
          TodaysForceImages = jsonImages
          break
      }
    })
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// app.on('activate', function () {
//   if (mainWindow === null) {
//     createWindow()
//   }
// })
