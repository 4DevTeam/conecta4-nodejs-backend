//Instanciar 'require'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({ message: 'Welcome lacchain!' })
  })