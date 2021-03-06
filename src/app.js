import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import naverRoutes from './routes/naverRoutes'
import projectRoutes from './routes/projectRoutes'

// const whitelist = ['*']
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors({
      origin: '*',
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
      exposeHeaders: ['X-Request-Id']
    }))
    this.app.use(helmet())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json());


  }

  routes() {
    this.app.use('/navers', naverRoutes)
    this.app.use('/projects', projectRoutes)
  }
}

export default new App().app
