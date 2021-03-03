class projectController {

  async index(req, res) {
    res.status(200).send([
      {
          id: 3,
          name: "Projeto muito Bom"
      },
      {
          id: 5,
          name: "Projeto Realmente Bom"
      }
  ])
  }

  async show(req, res) {
    res.send({
      id: 3,
      name: 'Projeto muito Bom',
      navers: [
        {
          id: 1,
          name: 'Fulano',
          birthdate: '1998 - 06 - 12',
          admission_date: '2020 - 06 - 12',
          job_role: 'Desenvolvedor'
        }
      ]
    })
  }

  async store(req, res) {
    // const { body } = req.body
    console.log(req.body)
    res.send(req.body)
  }

}

export default new projectController()
