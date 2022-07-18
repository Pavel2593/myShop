const Router = require('express')
const router = new Router()
const typeController = require('./../controllers/typeController')
const checkRole = require('./../middleware/CheckRoleMiddleware')

router.delete('/', checkRole('ADMIN'), typeController.removeTypes)
router.patch('/', checkRole('ADMIN'), typeController.updateType)
router.post('/', checkRole('ADMIN'), typeController.addType)
router.get('/get-one', typeController.getOne)
router.get('/', typeController.getAll)

module.exports = router