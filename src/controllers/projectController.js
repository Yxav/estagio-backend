import Project from '../models/Project'
class projectController {

  async index(req, res) {
    try {
      const response = await Project.query()
      res.status(200).send(response)
    } catch (error) {
      res.status(400).send({ message: ':( An error has occurred' })
    }
  }

  async show(req, res) {
    const { id } = req.params

    try {
      const response = await Project.query().findOne({ id }).withGraphFetched('navers')
      if (!response) return res.status(404).send({ message: 'Project not found' })

      res.status(200).send(response)
    } catch (error) {
      res.status(400).send({ message: ':( An error has occurred' })

    }

  }

  async store(req, res) {
    try {
      const { name, navers } = req.body

      const project = await Project.query().insert({ name })

      if(navers.length < 1){
        res.status(200).send({...project})
        return
      }


      try {
        await Project.relatedQuery('navers')
          .for(project.id)
          .relate(navers);
      } catch (error) {
        res.status(400).send({ error: 'Error in register project naver' })
      }

      res.status(200).send({
        ...project,
        navers
      })


    } catch (error) {
      console.log(error)
      res.status(400).send({ message: ':( An error has occurred' })

    }

  }

}

export default new projectController()
