const Router = require('express')
const router = new Router()
const userController = require('./../controllers/userController')
const authMiddleware = require('./../middleware/AuthMiddleware')
const checkRole = require('./../middleware/CheckRoleMiddleware')

router.delete('/delete', checkRole('ADMIN'), userController.removeUsers)
router.post('/add', checkRole('ADMIN'), userController.addUser)
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/', checkRole('ADMIN'), userController.getAll)
router.get('/get-one', checkRole('ADMIN'), userController.getOne)

module.exports = router