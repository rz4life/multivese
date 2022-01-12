const express = require('express');
const {Game, User} = require ('./index')
const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use(express.json());


app.get('/', (req,res) =>{
    res.send('Hello word')
})

// app.post('/creategameanduser',async (req,res) =>{

//     const user = await User.create({email:'jin@gmail.com', password:'password'})
//     const game1 = await Game.create({name: "FIFA2021", platform: "PS6"})
//     const game2 = await Game.create({name: "FIFA2019", platform: "PS3"})

//     await user.addGame(game1)
//     await user.addGame(game2)

//     const userGames = await user.getGames()
//     console.log(userGames)

//     // res.json({userGames})

// })

app.post('/addnewuser', async (req,res) =>{
    const newuser = await User.create(req.body)
    res.send('user created ')
})

app.delete('/removeuser/:id', async (req,res) =>{
    const user = await User.destroy({
        where:{id: req.params.id}})
    res.send('user deleted')
})

// app.put('/updateuser/:id', async (req,res) =>{
//     const user = await User.update({req.body, 
//         {where:id = req.params.id}})
//     res.send('user updated')
// })

app.get('/games', async (req,res) =>{
    const games = await Game.findAll()
    res.json({games})
})

app.get('/users', async (req,res) =>{
    const users = await User.findAll()
    res.json({users})
})

app.get('/user/:id', async (req,res) =>{
    const user = await User.findByPk(req.params.id)
    res.json({user})
})

app.get('/game/:id', async (req,res) =>{
    const game = await Game.findByPk(req.params.id)
    res.json({game})
})

app.listen(port, () =>{
   
    console.log("SERVER IS WORKING")
})