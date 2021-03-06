import { Model } from 'objection'
import Knex from 'knex'

import knexConfig from '../../knexfile'
import { NODE_ENV } from '../config'
import './Project'

const knex = Knex(knexConfig[NODE_ENV])
Model.knex(knex)
class Naver extends Model {
  static get tableName() {
    return 'navers'
  }

  static relationMappings = {
    projects: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Project',
      join: {
        from: 'navers.id',
        through: {
          from: 'navers_projects.naver_id',
          to: 'navers_projects.project_id'
        },
        to: 'projects.id'
      }
    }
  }

  $afterGet() {
    this.birthdate = new Date().toISOString().split('T')[0]
    this.admission_date = new Date().toISOString().split('T')[0]
  }
}

export default Naver
