import client from './index.js'

//Obtener un usuario con su id

export const userGet = async (id) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        //const users = database.collection('users')
        const query = { uuid: id }
        const result = await database.collection('users').find(query).toArray()
        console.log(JSON.stringify(result))
        return result
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

//Crear un nuevo usuario

export const userPost = async (user) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('users')
        const result = await users.insertOne(user)
        return result
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
        const result = await users.updateOne(query, {
            $set: {
                wins: updateData
            }
        })
        return result
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
    console.log('bandera')
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = await database.collection('users').find({}).toArray()
        console.log(users)
        return users
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

export const getUsersFilter = async () => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = await database.collection('users').find({}).sort({ wins: -1 }).limit(3).toArray()
        return users
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}