const {db, DataTypes, Model} = require('./db')
const path = require('path')
const fs = require('fs').promises

class Card extends Model{}
class Collector extends Model{}


Card.init({
name : DataTypes.STRING,
imgUrl: DataTypes.STRING,
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
