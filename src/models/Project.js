import { Model } from 'objection'
import Knex from 'knex'

import { development } from '../../knexfile'


Model.knex(Knex(development))


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
