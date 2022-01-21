const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const {Sauce} = require('./models/sauce');
const {db} = require('./db')

const port = 3000

const app = express();

//configure handlebars library to work well w/ express + sequelize model
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
//tell this express app that we're using handlebars
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));
app.use(require('body-parser').urlencoded());

const seedDb = async () => {
    
    await db.sync({ force: true });

    const sauces = [
        {name : 'Sriracha', image : '/img/Sriracha.gif'},
        {name : 'Franks', image: '/img/Franks.gif'},
        {name : 'Tobasco', image: '/img/Tobasco.gif'},
    ]

    const saucePromises = sauces.map(sauce => Sauce.create(sauce))
    await Promise.all(saucePromises)
    console.log("db populated!")
}

seedDb();


app.get('/sauces', async (req, res) => {
    const sauces = await Sauce.findAll()
    res.render('sauces', {sauces}) //2 arguments: string name of the template, data to enter
})

app.get('/sauces/:id', async (req, res) => {
    const sauce = await Sauce.findByPk(req.params.id)
    res.render('sauce', {sauce})
})

app.get('/new-sauce-form', (req,res) =>{
    res.render('newSauce');
})

app.post('/new-sauce', async (req,res) =>{
    const newSuace = await Sauce.create(req.body);
    const foundSuace = await Sauce.findByPk(newSuace.id);
    if(foundSuace){
        res.status(200).send("NEW SAUCE CREATED");
        console.log()
    }else{
        console.log('oh noooo')
    }
})

app.get('/update/:id',async (req,res) =>{
    const sauce = await Sauce.findByPk(req.params.id)
    res.render('updateSauce', {sauce})
})

app.put('/sauce/update/:id', async (req,res) =>{
    const sauce = await Sauce.update(req.body, {where: {id:req.params.id}})
    res.send('sauce updated')
})

app.delete('/delete-sauce/:id', async (req, res) =>{
    console.log("deleting")
    const saucesss = await Sauce.findByPk(req.params.id)
    console.log(saucesss)
    const suace = await Sauce.destroy({
        where: {id: req.params.id}
    })
    res.send('Suace deleted')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})