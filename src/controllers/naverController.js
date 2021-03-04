import Naver from '../models/Naver'

class naverController {
  async index(req, res) {
    const navers = await Naver.query()
    res.status(200).send(navers)
  }

  async show(req, res) {
    const { id } = req.params
    const response = await Naver.query().findById(id)
    res.status(200).send(response)
  }

  async store(req, res) {
    res.send(req.body)
    try {
      const response = await Naver.query().insert(req.body)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

}

export default new naverController()
