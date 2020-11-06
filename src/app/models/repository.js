import Sequelize, { Model } from 'sequelize'

class Repository extends Model {
  static init(sequelize) {
    super.init({
      color: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      user_id: Sequelize.INTEGER
    },
      {
        sequelize,
      })
    return this
  }
  static associate(models){
    this.belongsTo(models.User, {foreignKey:'user_id', as: 'user'})
  }
}
export default Repository