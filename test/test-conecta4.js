import { createUser, getUser, allUsers } from "./src/conecta4/user.js";

// Crea un nuevo usuario
createUser('Didier')

// Muestra todos los usuarios
const users = allUsers()
console.log(users)

// Obtiene exclusivamente a un usuario
getUser('e4f65e0e-f82d-41bc-ab68-331d9fa55634')