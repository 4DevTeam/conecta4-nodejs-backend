import { createUser, allUsers } from "../conecta4/user.js"

/**
 * @function postUser
 * @description Dar de alta a un nuevo usuario
 * @param {Object} req
 * @param {Object} res
 */

export const postUser = async (req, res) => {
    try {   
        const result = await createUser(req.body)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @function getUser
 * @description Buscar un usuario dentro de la BD
 * @param {Object} req
 * @param {Object} res
 */

 export const getUser = async (req, res) => {
    const { name } = req.query
    try {   
        const result = await createUser(name)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @function getAllUsers
 * @description Obtiene todos los usuarios de la BD
 * @param {Object} req
 * @param {Object} res
 */

export const getAllUsers = async (req, res) => {
    try {   
        const result = await allUsers()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @function getAllUsers
 * @description Obtiene todos los usuarios de la BD
 * @param {Object} req
 * @param {Object} res
 */

export const updateUser = async (req, res) => {
    try {   
        const result = await allUsers()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}