//the 'require' is instanced to be able to use it with import
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const router = require('express').Router()

import { postUser, getUser, getAllUsers, filterUsers, updateUser, updateHeuristic, createHeuristic, getHeuristic, allHeuristics } from '../controllers/contecta4.js'

// routes app
router.get('/', (req, res) => {
  res.send({ message: 'Bienvenido a la API de Contecta4!' })
})

//Create user
router.post('/user', postUser)

//Get User
router.get('/user', getUser)

//Update user
router.put('/user', updateUser)

//Get all users
router.get('/users', getAllUsers)

//Get users with filter
router.get('/users-filter', filterUsers)

//Create heuristic
router.post('/heuristic', createHeuristic)

//Get heuristic
router.get('/heuristic', getHeuristic)

//Update heuristic
router.put('/heuristic', updateHeuristic)

//Get all heuristics
router.get('/heuristics', allHeuristics)

export default router