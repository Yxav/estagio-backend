import Naver from '../models/Naver'

class naverController {
  async index(req, res) {
    try {
      const navers = await Naver.query()
      res.status(200).send(navers)
    } catch (error) {
      res.status(400).send({ message: ':( An error has occurred' })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const response = await Naver.query().findOne({ id }).withGraphFetched('projects')
      if (!response) return res.status(404).send({ message: 'Project not found' })

      res.status(200).send(response)
    } catch (error) {
      res.status(400).send({ message: ':( An error has occurred' })
    }

  }

  async store(req, res) {
    try {
      const {
        name,
        birthdate,
        admission_date,
        job_role,
        projects
      } = req.body

      const naver = await Naver.query().insert({
        name,
        job_role,
        birthdate,
        admission_date,
      })

      if (projects.length < 1) {
        res.status(200).send({ ...naver })
        return
      }

      try {
        await Naver.relatedQuery('projects')
          .for(naver.id)
          .relate(projects);
      } catch (error) {
        res.status(400).send({ error: 'Error in register project naver' })
      }


      res.status(200).send({
        ...naver,
        projects
      })
    } catch (e) {
      res.status(400).send({ message: ':( An error has occurred' })
    }
  }

}

export default new naverController()
