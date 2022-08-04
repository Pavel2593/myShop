const ApiError = require('./../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('./../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.JWT_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(request, response, next) {
        const { email, password, role } = request.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный логин или пароль'))
        }

        const candidate = await User.findOne({
            where: { email }
        })

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            email,
            password: hashPassword,
            role,
        })
        const basket = await Basket.create({
            userId: user.id
        })
        const token = generateJwt(user.id, user.email, user.role)

        return response.json({ token })
    }

    async login(request, response, next) {
        const { email, password } = request.body
        const user = await User.findOne({
            where: { email }
        })

        if (!user) {
            return next(ApiError.badRequest('Email не верный'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Пароль не верный'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        console.log(user)
        return response.json({ token })
    }

    async check(request, response, next) {
        const token = generateJwt(request.user.id, request.user.email, request.user.role)
        return response.json({ token })
    }

    async getAll(request, response, next) {
        let { limit, page } = request.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let users = await User.findAndCountAll({
            limit,
            offset,
        })
        if (users.count % limit == 0) {
            const pageCount = users.count / limit
            users.pageCount = pageCount
        } else {
            const pageCount = Math.ceil(users.count / limit)
            users.pageCount = pageCount
        }

        return response.json(users)
    }

    async getOne(request, response, next) {
        const id = request.query.id
        const user = await User.findOne({
            where: { id }
        })

        return response.json(user)
    }

    async addUser(request, response, next) {
        const { email, password, role } = request.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный логин или пароль'))
        }

        const candidate = await User.findOne({
            where: { email }
        })

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            email,
            password: hashPassword,
            role,
        })
        const basket = await Basket.create({
            userId: user.id
        })

        return response.json({ user })
    }

    async updateUser(request, response, next) {
        const {id, email, role} = request.body
        const update = await User.upsert({
            id: id,
            email: email,
            role: role
        });

        return response.json(update)
    }

    async removeUsers(request, response, next) {
        const { listId } = request.body;
        
        const deletedUsers = await User.destroy({
            where: {
                id: listId
            }
        })

        return response.json({ deletedUsers })
    }
}

module.exports = new UserController