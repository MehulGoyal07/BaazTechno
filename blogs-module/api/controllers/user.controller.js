/* eslint-disable no-unused-vars */
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
import errorHandler from '../utils/error.js'
export const test = (req, res) => {
    res.json({
        message: 'API is working'
    })
}

export const updateUser = async(req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You can only update your account!'))
    }
    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, 'Password must be at least 6 characters!'))
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }
    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(
                errorHandler(400, 'Username must be between 7 and 20 characters!')
            )
        }
        if (req.body.username.includes(' ')) {
            return next(errorHandler(400, 'Username must not contain spaces!'))
        }
        if (req.body.username != req.body.username.toLowerCase()) {
            return next(errorHandler(400, 'Username must be lowercase!'))
        }
        if (!req.body.username.match(/^[a-z0-9]+$/)) {
            return next(errorHandler(400, 'Username must be alphanumeric!'))
        }
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password
                }
            }, {
                new: true
            }
        )
        const { password, ...others } = updatedUser._doc
        res.status(200).json(others)
    } catch (error) {
        return next(error)
    }
}

export const deleteUser = async(req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You can only delete your account!'))
    }
    try {
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json('User has been deleted.')
    } catch (error) {
        return next(error)
    }
}

export const signout = async(req, res, next) => {
    try {
        res.clearCookie('access_token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        res.status(200).json('User has been signed out.')
    } catch (error) {
        return next(error)
    }
}