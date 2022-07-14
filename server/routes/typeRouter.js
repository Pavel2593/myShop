const Router = require('express')
const router = new Router()
const typeController = require('./../controllers/typeController')
const checkRole = require('./../middleware/CheckRoleMiddleware')

router.delete('/delete', checkRole('ADMIN'), typeController.removeTypes)
router.patch('/update', checkRole('ADMIN'), typeController.updateType)
router.post('/add', checkRole('ADMIN'), typeController.addType)
router.get('/get-one', typeController.getOne)
router.get('/', typeController.getAll)

module.exports = router