const Router = require('express')
const router = new Router()
const typeController = require('./../controllers/typeController')
const checkRole = require('./../middleware/CheckRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.creat)
router.get('/', typeController.getAll)

module.exports = router