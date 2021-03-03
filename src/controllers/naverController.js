class naverController {
  async index(req, res){
    res.status(200).send({
      id: 1,
      name: 'Fulano',
      birthdate: '1998-6-12',
      admission_date: '2020-6-12',
      job_role: 'Desenvolvedor'
  })
  }

  async show(req, res){}

  async store (req, res){
    const { body } = req.params
  }

}

export default new naverController()
