const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/brands', brandRouter)
router.use('/devices', deviceRouter)
router.use('/types', typeRouter)
router.use('/users', userRouter)
 
module.exports = router