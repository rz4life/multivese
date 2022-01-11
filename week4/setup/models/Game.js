const {db, DataTypes, Model} = require('../db')

class Game extends Model{}

Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING
},{
    sequelize: db
})

module.exports = {Game}