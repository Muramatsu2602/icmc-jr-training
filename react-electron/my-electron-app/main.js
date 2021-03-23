const { app, BrowserWindow } = require('electron')
const path = require('path')

// Cria e abre uma nova janela
function createWindow () {
  const win = new BrowserWindow({
    width: 800, // Largura da janela
    height: 600, // Altura da janela
		frame: false, // Retira barra superior
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

	// Carrega o arquivo index.html
  win.loadFile('index.html')

	// Carrega seu site em react (se ele estiver rodando)
	// win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})