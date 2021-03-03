class projectController {

  async index(req, res) {
    res.status(200).send({
      id: 3,
      name: 'Projeto muito Bom'
    })
  }

  async show(req, res) { }

  async store(req, res) {
    const { body } = req.params
  }

}

export default new projectController()
