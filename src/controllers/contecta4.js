import { createUser, allUsers, getUserId, usersFilter, updateUserData } from "../conecta4/user.js"

/**
 * @function postUser
 * @description Dar de alta a un nuevo usuario a partir de la información proporcionada
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
 * @description Buscar un usuario dentro de la base de datos con su uuid
 * @param {Object} req
 * @param {Object} res
 */

 export const getUser = async (req, res) => {
     console.log(req.body.id)
    try {   
        const result = await getUserId(req.body.id)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @function getAllUsers
 * @description Obtiene todos los usuarios de la base de datos
 * @param {Object} req
 * @param {Object} res
 */

export const updateUser = async (req, res) => {
    try {   
        const result = await updateUserData(req.body.id, req.body.wins)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @function filterUsers
 * @description Obtiene todos los usuarios de la base de datos de manera descendente y con filtro
 * @param {Object} req
 * @param {Object} res
 */

 export const filterUsers = async (req, res) => {
    try {   
        const result = await usersFilter()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @function getAllUsers
 * @description Obtiene todos los usuarios de la base de datos
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