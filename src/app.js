//instanciar el 'require'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

//instancia Express para la API
const express = require('express')
const app = express()
const cors = require('cors')

//Importar todas las rutas
import api from './routes/index.js'
const { handleErrors } = require('./middlewares/handleErrors.cjs')

//Cors
const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

//Rutas
app.use('/api', api)
app.use(handleErrors)

export default app