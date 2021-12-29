'use strict'

const { User } = require('../schema/user');

class UserController {

    static async addUser(req, res) {
        try {
            let checkUser = await User.findOne({ email: req.body.email });
            if (checkUser) {
                return res.status(401).send({ success: false, msg: 'User Already Exits' });
            } else {
                let name = req.body.name;
                let email = req.body.email;
                let password = req.body.password;

                var user = new User({
                    name: name,
                    password: password,
                    email: email
                });

                await user.save();
                return res.status(200).send({ success: true, msg: 'User Added Successfuly', user: await User.findOne({ email: email }) });
            }

        } catch (error) {
            console.log(error)
            return res.status(400).send({ success: false, msg: error });
        }
    }

    // static async getStudentDetails(req, res) {
    //     try {
    //         let student = await Student.findById({ _id: req.query.studentId });
    //         if(student) {
    //             return res.status(200).send({ success: true, msg: 'Student Details fetched Successfuly', student: student });
    //         } else {
    //             res.status(401).send({ success: false, msg: 'Student does not exist!' })
    //         }
            
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(400).send({ success: false, msg: error });
    //     }
    // }

    // static async getStudentImage(req, res) {
    //     try {
    //         let student = await Student.findById({ _id: req.query.userId });
    //         return res.status(200).send({ success: true, msg: 'imgURL fetched Successfuly', imgURL: student.imgUrl });
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(400).send({ success: false, msg: error });
    //     }
    // }

    // static async deleteStudent(req, res) {
    //     try {
    //         let checkUser = await Student.findOne({ _id: req.query.id });
    //         if (checkUser) {
    //             await Student.deleteOne({ _id: req.query.id })
    //             return res.status(200).send({ success: true, msg: 'Student Deleted Successfuly' });
    //         } else {
    //             res.status(401).send({ success: false, msg: 'Student does not exist!' })
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         return res.status(400).send({ success: false, msg: error });
    //     }
    // }
}

module.exports = { UserController }