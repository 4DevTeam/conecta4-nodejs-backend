//instanciar el 'require'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

//instancia Express para la API
const express = require('express')
const app = express()
const cors = require('cors')

//BodyParser en la API (soporte para JSON)
const BodyParser = require('body-parser')
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

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