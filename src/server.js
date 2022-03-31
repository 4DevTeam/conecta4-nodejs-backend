//Instanciar 'require'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

require('dotenv').config()
import app from './app.js'

//puerto 3300
const { PORT = 3301 } = process.env

//Iniciar server
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}/api`)
})