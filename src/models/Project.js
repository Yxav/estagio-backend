import { Model } from 'objection'
import Knex from 'knex'

import { development } from '../../knexfile'
import Naver from './Naver'


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
          // persons_movies is the join table.
          from: 'navers_projects.project_id',
          to: 'navers_projects.naver_id'
        },
        to: 'navers.id'
      }
    }
  }
}

export default Project
