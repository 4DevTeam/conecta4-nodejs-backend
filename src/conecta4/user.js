import { v4 as uuidv4 } from 'uuid'
const users = []

export const createUser = (name) => {
    const user = {
        id: uuidv4(),
        name: name,
        score: 0,
        opportunity: 0,
        type: ''
    }

    users.push(user)
}

export const getUser = (id) => {
    let userFind = users.find (x => x.id == id)
    return userFind
    //console.log('user located: ' + JSON.stringify(userFind))
}

export const allUsers = () => {
    return users
}