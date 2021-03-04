import { Router } from 'express'
import { celebrate, Joi, errors, Segments } from 'celebrate'


import naverController from '../controllers/naverController'


const router = new Router()


router.get('/', naverController.index)
router.get('/:id', naverController.show)

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    birthdate: Joi.date().required(),
    admission_date: Joi.date().required(),
    job_role: Joi.string().required(),
    projects: Joi.array()
  })

}), naverController.store)

router.use(errors())

export default router
