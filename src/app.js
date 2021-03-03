import express from 'express'

import naverRoutes from './routes/naverRoutes'
import projectRoutes from './routes/projectRoutes'


class App{
  constructor(){
    this.app = express()
    this.routes()
    this.middlewares()
  }

  middlewares(){
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/navers', naverRoutes)
    this.app.use('/projects', projectRoutes)
  }
}

export default new App().app
