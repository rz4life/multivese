const {db, DataTypes, Model} = require('../db')
const {Game} = require('./Game')

class User extends Model{}

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
},{
    sequelize: db
})

User.hasMany(Game)

module.exports = {User}

