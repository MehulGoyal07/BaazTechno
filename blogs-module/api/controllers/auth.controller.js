/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import errorHandler from '../utils/error.js'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export const signup = async(req, res, next) => {
    const { username, email, password } = req.body

    if (!username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
    ) {
        next(errorHandler(400, 'All fields are required'))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()
        res.json('User created successfully')
    } catch (error) {
        next(error)
    }
}

export const signin = async(req, res, next) => {
    const { email, password } = req.body
    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }
        const isPasswordCorrect = await bcryptjs.compareSync(
            password,
            validUser.password
        )
        if (!isPasswordCorrect) {
            return next(errorHandler(400, 'Wrong credentials'))
        }
        const token = jwt.sign({
                id: validUser._id
            },
            JWT_SECRET
        )
        const { password: pass, ...rest } = validUser._doc;
        res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true
            })
            .json(rest)
    } catch (error) {
        next(error)
    }
}