const { Brand } = require('./../models/models')
const ApiError = require('./../error/ApiError')

class BrandController {
    async removeBrands(request, response, next) {
        const { listId } = request.body;

        const deletedTypes = await Brand.destroy({
            where: {
                id: listId
            }
        })

        return response.json(deletedTypes)
    }

    async updateBrand(request, response, next) {
        const { id, name } = request.body
        const update = await Brand.upsert({
            id,
            name
        });

        return response.json(update)
    }

    async addBrand(request, response, next) {
        const { name } = request.body

        const checkType = await Brand.findOne({
            where: { name }
        })

        if (checkType) {
            return next(ApiError.badRequest('Такой тип уже существует'))
        }

        const type = await Brand.create({ name })

        return response.json(type)
    }

    async getOne(request, response, next) {
        const id = request.query.id
        const brand = await Brand.findOne({
            where: { id }
        })

        return response.json(brand)
    }

    async getAll(request, response, next) {
        const brands = await Brand.findAll()

        return response.json(brands)
    }
}

module.exports = new BrandController()