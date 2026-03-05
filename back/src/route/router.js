import Router from 'express'
import controller from '../ctrl/controller.js'

const router = Router()

router.get("/", controller)

export default router