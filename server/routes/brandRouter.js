const Router = require('express')
const router = new Router()
const brandController = require('./../controllers/brandController')
const checkRole = require('./../middleware/CheckRoleMiddleware')

router.delete('/', checkRole('ADMIN'), brandController.removeBrands)
router.patch('/', checkRole('ADMIN'), brandController.updateBrand)
router.post('/', checkRole('ADMIN'), brandController.addBrand)
router.get('/get-one', brandController.getOne)
router.get('/', brandController.getAll)

module.exports = router
