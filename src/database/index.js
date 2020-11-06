import Sequelize from 'sequelize'
import User from '../app/models/User'
import Repository from '../app/models/repository'
import Link from '../app/models/link'
import databaseConfig from '../config/database'

const models = [User, Repository, Link]

class Database {
  constructor() {
    this.init()
  }
  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
