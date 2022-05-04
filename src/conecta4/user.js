import { v4 as uuidv4 } from 'uuid'
import { userPost, getAllUsers, updateUser, userGet } from '../database/users'

export async function createUser(userData) {
    console.log(userData)
    const user = {
        uuid: uuidv4(),
        name: userData.name,
        wins: userData.wins
    }

    const res = await userPost(user)
    console.log(res)
    return user.uuid
}

export async function getUserId (id) {
    const res = await userGet(id)
    return res
}

export async function allUsers() {
    const res = await getAllUsers()
    return res
}

export async function updateUserData(id, data) {
    const res = await updateUser(id, data)
    return res
}
