import { v4 as uuidv4 } from 'uuid'
import { userPost } from '../database/users'

// Objeto para conetener a todos los usuarios registrados en la base de datos
const users = []

export async function createUser(name) {
    const user = {
        id: uuidv4(),
        name: name,
        opportunity: 0,
        type_piece: '',
        pieces: {}
    }

    const res = await userPost(user)
    return res
}

export const getUser = (id) => {
    let userFind = users.find (x => x.id == id)
    return userFind
}

export const allUsers = () => {
    return users
}
