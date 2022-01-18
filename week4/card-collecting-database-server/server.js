const express = require('express');
const app = express();
const port = 3001;
const {Collector, Card} = require('./index')


app.use(express.json());


app.get('/allcards', async (req,res) =>{
    try {
        const allcards = await Card.findAll()   
        res.send(allcards)
    } catch (error) {
      console.log(error)  
    }
})

app.get('/singlecard/:id', async (req,res) =>{
    try {
        const singlecard = await Card.findByPk(req.params.id)   
        res.send(singlecard)
    } catch (error) {
      console.log(error)  
    }
})

app.get('/allcollectors', async (req,res) =>{
    try {
        const collectorscards = await Collector.findAll()   
        res.send(collectorscards)
    } catch (error) {
      console.log(error)  
    }
})

app.get('/singlecollector/:id', async (req,res) =>{
    try {
        const singlecollector = await Collector.findByPk(req.params.id)   
        res.send(singlecollector)
    } catch (error) {
      console.log(error)  
    }
})

app.post('/addnewCard', async (req,res) =>{
    const newcard = await Card.create(req.body);
    res.send(newcard)
})

app.post('/addnewCollector', async (req,res) =>{
    const newcollector = await Collector.create(req.body);
    res.send(newcollector)
})

app.delete('/removecard/:id', async (req,res) =>{
    const card = await Card.destroy({
        where: 
        {id: req.params.id}
    })
    res.send('Card deleted')
})

app.delete('/removecollector/:id', async (req,res) =>{
    const collector = await Collector.destroy({
        where: 
        {id: req.params.id}
    })
    res.send('collector deleted')
})


app.put('/tradecards/:collector1id/:collector2id/:card1id/:card2id', async ( req,res) =>{
const collector1 = await Collector.findByPk(req.params.collector1id)
const collector2 = await Collector.findByPk(req.params.collector2id)
const card1 = await Card.findByPk(req.params.card1id)
const card2 = await Card.findByPk(req.params.card2id)

await collector1.addCard(card2)
await collector2.addCard(card1)

res.send(" both collectors have succefully traded cards ")
})


app.listen(port, () =>{
    console.log("server is currently working")
})