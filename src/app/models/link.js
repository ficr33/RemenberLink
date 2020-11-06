import Sequelize, { Model } from 'sequelize'
class Link extends Model {
  static init(sequelize) {
    super.init({
      link: Sequelize.STRING,
      title_link: Sequelize.STRING,
      description_link: Sequelize.STRING,
      repository_id: Sequelize.INTEGER
    },
      {
        sequelize,
      })
    return this
  }
  static associate(models){
    this.belongsTo(models.Repository, {foreignKey:'repository_id', as: 'repository'})
  }
}
export default Link