const path = require('path')
const fs = require('fs').promises
const {db} = require ('./db')
const {Game} = require('./models/Game')
const {User} = require('./models/User')

const seed = async () =>{
    Game.belongsTo(User)
    User.hasMany(Game)
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

module.exports = seed;