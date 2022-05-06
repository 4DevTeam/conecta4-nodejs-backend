import client from './index.js'

//Crear una nueva heuristica

export const createHeuristic = async (data) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const heu = database.collection('heuristics')
        const res = await heu.insertOne(data)
        return res
    } catch (error) {
        console.log('error bd')
        console.log(error)
    }
}

//Obtener una heuristica con su id

export const getHeuristic = async (id) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const heu = database.collection('heuristics')
        const query = { uuid: id }
        const res = await heu.find(query).toArray()
        return res
    } catch (error) {
        console.log(error)
    }
}

//Actualizar una heuristica

export const updateHeuristic = async (data) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('heuristics')
        const query = { uuid: data.id }
        const result = await users.updateOne(query, {
            $set: {
                partidas_ganadas: data.partidas_ganadas,
                partidas_perdidas: data.partidas_perdidas
            }
        })
        return result
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

//Obtener todas las heuristicas

export const gettAllHeuristics = async () => {
    console.log('bandera')
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = await database.collection('heuristics').find({}).toArray()
        console.log(users)
        return users
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Eliminar una heuristica

export const deleteHeuristic = async (id) => {
    try {
        await client.connect()
        const database = client.db('conecta4')
        const users = database.collection('heuristics')
        const query = { uuid: id }
        const result = await users.deleteOne(query)
        if (result.deletedCount === 1) {
            console.log('heuristic deleted')
        } else {
            console.log('heuristic not deleted')
        }
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}
