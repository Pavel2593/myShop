const { Type } = require('./../models/models')
const ApiError = require('./../error/ApiError')

class TypeController {
    async removeTypes(request, response, next) {
        const { listId } = request.body;
        const deletedTypes = await Type.destroy({
            where: {
                id: listId
            }
        })

        return response.json(deletedTypes)
    }

    async updateType(request, response, next) {
        const { id, name } = request.body
        const update = await Type.upsert({
            id,
            name
        });

        return response.json(update)
    }

    async addType(request, response, next) {
        const { name } = request.body

        const checkType = await Type.findOne({
            where: { name }
        })

        if (checkType) {
            return next(ApiError.badRequest('Такой тип уже существует'))
        }

        const type = await Type.create({ name })

        return response.json(type)
    }

    async getOne(request, response, next) {
        const id = request.query.id
        const type = await Type.findOne({
            where: { id }
        })

        return response.json(type)
    }

    async getAll(request, response) {
        const types = await Type.findAll()
        return response.json(types)
    }
}

module.exports = new TypeController()