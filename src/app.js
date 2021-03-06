import express from 'express'
import bodyParser from 'body-parser'

import naverRoutes from './routes/naverRoutes'
import projectRoutes from './routes/projectRoutes'


class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }))


  }

  routes() {
    this.app.use('/navers', naverRoutes)
    this.app.use('/projects', projectRoutes)
  }
}

export default new App().app
