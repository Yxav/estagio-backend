import { Router} from 'express'

import projectController from '../controllers/projectController'

const router = new Router()

router.get('/', projectController.index)
router.get('/:id', projectController.show)
router.post('/', projectController.store)


export default router
