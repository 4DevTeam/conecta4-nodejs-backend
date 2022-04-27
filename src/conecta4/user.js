import { v4 as uuidv4 } from 'uuid'
import { userPost, getAllUsers, updateUser } from '../database/users'

export async function createUser(userData) {
    console.log(userData)
    const user = {
        id: uuidv4(),
        name: userData.name,
        opportunity: 0,
        score: 0,
        type_piece: userData.color_disc,
        pieces: {}
    }

    const res = await userPost(user)
    console.log(res)
    console.log('id: ' + res.insertedId)
    return res.insertedId
}

export const getUser = (id) => {
    let userFind = users.find (x => x.id == id)
    return userFind
}

export async function allUsers() {
    const res = await getAllUsers()
    return res
}

export async function updateUserData(id, data) {
    const res = await updateUser(id, data)
    return res
}
