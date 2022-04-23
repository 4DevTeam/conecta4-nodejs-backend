import { v4 as uuidv4 } from 'uuid'
import { userPost } from '../database/users'

// Objeto para conetener a todos los usuarios registrados en la base de datos
const users = []

export async function createUser(userData) {
    console.log(userData)
    const user = {
        id: uuidv4(),
        name: userData.name,
        opportunity: 0,
        type_piece: userData.type_disc,
        pieces: {}
    }

    const res = await userPost(user)
    console.log(res)
    return res
}

export const getUser = (id) => {
    let userFind = users.find (x => x.id == id)
    return userFind
}

export const allUsers = () => {
    return users
}
