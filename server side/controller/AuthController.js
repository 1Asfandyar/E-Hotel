'use strict'

const { User } = require('./../schema/user');
// const { AuthMiddleware } = require('./../middlewares/AuthMiddleware');
// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

class AuthController {

    static async loginUser(req, res) {
        try {
            let user = await User.findOne({email: req.body.email});
            if(user) {
                if(req.body.password===user.password){
                    return res.status(200).send({success: true, msg: 'Logged in Successfuly', user: user})
                } else {
                    return res.status(401).send({success: false, msg: 'Incorrect Password'})
                }
            } else {
                return res.status(401).send({success: false, msg: 'User does not exist'})
            }
        } catch (error) {
            console.log(error)
            return res.status(400).send({success: false, msg: error});
        }
    }

    // static async studentCheckAuth(req, res) {
    //     try {
    //         let token = req.header('auth-token');
    //         let decodedToken = AuthMiddleware.decodeToken(token);
    //         if(decodedToken) {
    //             let student = await Student.findOne({_id: mongoose.Types.ObjectId(decodedToken._id)});
    //             if(student) {
    //                 return res.status(200).send({success: true, msg: 'Authentication Successful'});
    //             } else {
    //                 return res.status(401).send({success: false, msg: 'Authentication Failed'})
    //             }
    //         } else {
    //             return res.status(401).send({success: false, msg: 'Token Invalid'})
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(400).send({success: false, msg: error});
    //     }
    // }
}

module.exports = { AuthController }
