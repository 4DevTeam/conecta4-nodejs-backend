//Instanciar 'require'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const router = require('express').Router()
import routerContecta4 from './conecta4.js'

router.use('/', routerContecta4)

export default router