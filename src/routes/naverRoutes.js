import { Router} from 'express'

import naverController from '../controllers/naverController'

const router = new Router()


router.get('/', naverController.index)
router.get('/:id', naverController.show)
router.post('/', naverController.store)


export default router
