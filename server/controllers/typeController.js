const {Type} = require('./../models/models')
const ApiError = require('./../error/ApiError')
class TypeController {
    async creat(request, response) {
        const {name} = request.body
        const type = await Type.create({name})
        
        return response.json(type)
    }

    async getAll (request, response) {

    }
}

module.exports = new TypeController()