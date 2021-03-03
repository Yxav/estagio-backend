import { Router} from 'express'

import projectController from '../controllers/projectController'

const router = new Router()

router.get('/', projectController.index)


export default router
