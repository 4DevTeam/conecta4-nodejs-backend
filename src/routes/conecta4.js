//the 'require' is instanced to be able to use it with import
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const router = require('express').Router()

import { postUser, getUser } from '../controllers/contecta4.js'

// routes app
router.get('/', (req, res) => {
  res.send({ message: 'Bienvenido a la API de Contecta4!' })
})

//Create user
router.post('/user', postUser)

//Get User
router.get('/user', getUser)

export default router