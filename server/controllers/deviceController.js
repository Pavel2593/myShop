const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo, Brand } = require('./../models/models')
const ApiError = require('./../error/ApiError')
const { where } = require('sequelize')

class DeviceController {
    async removeDevices(request, response, next) {
        const { listId } = request.body;
        const deletedDevices = await Device.destroy({
            where: {
                id: listId
            }
        })

        return response.json(deletedDevices)
    }

    async addDevice(request, response, next) {
        try {
            let { name, price, brandId, typeId, info } = request.body
            const {img} = request.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            })

            if (info) {
                info = JSON.parce(info)
                info.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id,
                    })
                });
            }

            return response.json(device)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(request, response) {
        let {brandId, typeId, limit, page} = request.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let devices
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({
                include: [Brand],
                limit,
                offset,
            })
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({
                include: [Brand],
                where: {brandId},
                limit,
                offset,
            })
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({
                include: [Brand],
                where: {typeId},
                limit,
                offset,
            })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({
                include: [Brand],
                where: {brandId, typeId},
                limit,
                offset,
            })
        }

        return response.json(devices)
    }

    async getOne(request, response, next) {
        const id = request.query.id
        const device = await Device.findOne({
            where: { id }
        })

        return response.json(device)
    }
}

module.exports = new DeviceController()