import {Model} from 'objection'
import Knex from 'knex'

import { development } from '../../knexfile'
import './Project'
import Project from './Project'


Model.knex(Knex(development))

class Naver extends Model {
  static get tableName(){
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
}

export default Naver
