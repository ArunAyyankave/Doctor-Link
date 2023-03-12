const users = require('../../models/usersModel')
const bcrypt = require('bcrypt');
const { create } = require('../../models/usersModel');
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    mobileExist: async (req, res) => {
        try {
            users.findOne({ mobile: req.body.mobile }).then(async (response) => {
                if (response) {
                    return res.sendStatus(409); //user already exist
                } else {
                    return res.sendStatus(200);
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    userSignup: async (req, res) => {
        try {
            users.findOne({ mobile: req.body.mobile }).then(async (response) => {
                if (response) {
                    return res.sendStatus(409); //user already exist
                } else {
                    req.body.password = await bcrypt.hash(req.body.password, 10)
                    await users.create(req.body).then((response) => {
                        const accessToken = jwt.sign({
                            id: response._id
                        }, 'secretKey',
                            { expiresIn: '7d' }
                        );
                        res.status(201).json({ accessToken })
                    })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    userSignin: async (req, res) => {
        try {
            const { mobile, password } = req.body
            if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });
            else {

                const foundUser = await users.findOne({ mobile })
                if (!foundUser) return res.sendStatus(401); //unauthorized
                else {

                    const match = await bcrypt.compare(password, foundUser.password)
                    if (match) {
                        const accessToken = jwt.sign({ id: foundUser._id, }, 'secretKey', { expiresIn: '7d' });
                        res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile });

                    } else {
                        res.sendStatus(401)
                    }
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    getUser: (req, res) => {
        const token = req.headers['x-access-token'];
        try {
            const { id } = jwt.verify(token, 'secretKey');
            return res.status(200).json({ id })
        } catch (error) {
            res.status(401).json({ error: 'invalid token' })
        }
    },
    MobileExistForForgot: (req, res) => {
        try {
            users.findOne(req.query).then(async (response) => {
                if (response) {
                    return res.sendStatus(200); //user already exist
                } else {
                    return res.sendStatus(404);  //not found
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    newPassSet: async (req, res) => {
        try {
            req.body.pwd = await bcrypt.hash(req.body.pwd, 10)
            users.updateOne({ mobile: req.body.mobile }, { $set: { password: req.body.pwd } }).then(response => {
                res.sendStatus(200);
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}