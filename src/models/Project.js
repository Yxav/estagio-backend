import { Model } from 'objection'
import Knex from 'knex'

import knexConfig from '../../knexfile'
import { NODE_ENV } from '../config'

const knex = Knex(knexConfig[NODE_ENV])
Model.knex(knex)

class Project extends Model {
  static get tableName() {
    return 'projects'
  }

  static relationMappings = {
    navers: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Naver',

      join: {
        from: 'projects.id',
        through: {
          from: 'navers_projects.project_id',
          to: 'navers_projects.naver_id'
        },
        to: 'navers.id'
      }
    }
  }
}

export default Project
