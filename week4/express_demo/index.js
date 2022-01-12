const {db, DataTypes, Model} = require('./db')
const path = require('path')
const fs = require('fs').promises

class Game extends Model{}

Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING
},{
    sequelize: db
})



class User extends Model{}

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
},{
    sequelize: db
})


const seed = async () =>{
    await db.sync({force:true})

    const seedPath = path.join(__dirname,'games.json')
    const seedPath2 = path.join(__dirname,'users.json')
    const buffer = await fs.readFile(seedPath)
    const buffer2 = await fs.readFile(seedPath2)
    const {data} = JSON.parse(String(buffer))
    const data2 = JSON.parse(String(buffer2))
    const gamePromises = data.map(game => Game.create(game))
    const userPromises = data2.data.map(user => User.create(user))

    await Promise.all(gamePromises)
    await Promise.all(userPromises)
    console.log("it worked")
}

seed()

Game.belongsTo(User)
User.hasMany(Game)





module.exports = {User,Game}