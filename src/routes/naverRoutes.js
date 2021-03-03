import { Router} from 'express'

import naverController from '../controllers/naverController'

const router = new Router()

router.get('/', naverController.index)


export default router
