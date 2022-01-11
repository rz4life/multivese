const {db, DataTypes, Model} = require('../db')
const {User} = require('./User')

class Game extends Model{}

Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING
},{
    sequelize: db
})
Game.belongsTo(User)

module.exports = {Game}