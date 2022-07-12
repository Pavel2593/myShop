const { Type } = require('./../models/models')
const ApiError = require('./../error/ApiError')

class TypeController {
    async getAll(request, response) {
        const types = await Type.findAll()
        return response.json(types)
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

    async removeTypes(request, response, next) {
        const { listId } = request.body;

        const deletedTypes = await Type.destroy({
            where: {
                id: listId
            }
        })

        return response.json({ deletedTypes })
    }
}

module.exports = new TypeController()