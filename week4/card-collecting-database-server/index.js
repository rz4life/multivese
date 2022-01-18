const {db, DataTypes, Model} = require('./db')
const path = require('path')
const fs = require('fs').promises

class Card extends Model{}
class Collector extends Model{}


Card.init({
name : DataTypes.STRING,
imgURL: DataTypes.STRING,
Price : DataTypes.INTEGER
},{
    sequelize:db
})

Collector.init({
    name : DataTypes.STRING,
    budget: DataTypes.STRING
},{
        sequelize:db
})


const seed = async () =>{
    await db.sync({force:true})

    const seedPath = path.join(__dirname,'card.json')
    const seedPath2 = path.join(__dirname,'collector.json')
    const buffer = await fs.readFile(seedPath)
    const buffer2 = await fs.readFile(seedPath2)
    const {data} = JSON.parse(String(buffer))
    const data2 = JSON.parse(String(buffer2))
    const cardPromises = data.map(card => Card.create(card))
    const collectorPromises = data2.data.map(collector => Collector.create(collector))

    await Promise.all(cardPromises)
    await Promise.all(collectorPromises)
    console.log("it worked")
}

seed()


Card.belongsTo(Collector)
Collector.hasMany(Card)





module.exports = {Card,Collector}
