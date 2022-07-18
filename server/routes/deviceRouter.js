const Router = require('express')
const router = new Router()
const deviceController = require('./../controllers/deviceController')

router.delete('/', deviceController.removeDevices)
router.post('/', deviceController.addDevice)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router