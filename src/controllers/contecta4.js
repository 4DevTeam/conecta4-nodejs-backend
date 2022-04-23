import { createUser } from "../conecta4/user.js"

/**
 * @function postUser
 * @description Dar de alta a un nuevo usuario
 * @param {Object} req
 * @param {Object} res
 */

export const postUser = async (req, res) => {
    try {   
        const result = await createUser(req.body.name)
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
    // console.log(req)
    const { name } = req.query
    try {   
        const result = await createUser(name)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}