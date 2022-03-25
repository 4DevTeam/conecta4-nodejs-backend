import client from './index.js'

//Obtener un usuario con su id

export const getUser = async (id) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('users')
        const query = { uuid: id }
        const result = await users.findOne(query)
        console.log('find User: ' + JSON.stringify(result))
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

//Crear un nuevo usuario

export const createUser = async (user) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('users')
        const result = await users.insertOne(user)
        console.log('Created User: ' + JSON.stringify(result))
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

//Actualizar un usuario

export const updateUser = async (id, updateData) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('users')
        const query = { uuid: id }
        const result = await users.updateOne(query, updateData)
        console.log('Update User: ' + JSON.stringify(result))
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Eliminar un usuario

export const deleteUser = async (id) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('users')
        const query = { uuid: id }
        const result = await users.deleteOne(query)
        if (result.deletedCount === 1) {
            console.log('user deleted')
        } else {
            console.log('user not deleted')
        }
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

//Obtener todos los usuario

export const getAllUsers = async () => {
    
}