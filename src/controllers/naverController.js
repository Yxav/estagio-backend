class naverController {
  async index(req, res) {
    res.status(200).send([
      {
        id: 1,
        name: "Fulano",
        birthdate: "1998-06-12",
        admission_date: "2020-06-12",
        job_role: "Desenvolvedor"
      },
      {
        id: 2,
        name: "Ciclano",
        birthdate: "1998-06-12",
        admission_date: "2018-06-12",
        job_role: "Desenvolvedor"
      }
    ])
  }

  async show(req, res) {
    res.send({
      id: 1,
      name: 'Fulano',
      birthdate: '1998-06-12',
      admission_date: '2020-06-12',
      job_role: 'Desenvolvedor',
      projects: [
        {
          id: 3,
          name: 'Projeto muito Bom'
        }
      ]
    })
  }

  async store(req, res) {
    console.log(req.body)
    res.send(req.body)
  }

}

export default new naverController()
