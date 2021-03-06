import { Router } from 'express'
import { celebrate, Joi, errors, Segments } from 'celebrate'

import projectController from '../controllers/projectController'

const router = new Router()

router.get('/', projectController.index)
router.get('/:id', projectController.show)

router.post('/', celebrate({

  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    navers: Joi.array()
  })

}), projectController.store)

router.use(errors())


export default router
