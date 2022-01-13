const express = require('express');
const {body, validationResult} = require ('express-validator')
const {Game, User} = require ('./index')
const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use(express.json());


app.get('/', (req,res) =>{
    res.send('Hello word')
})

app.post('/addnewuser', async ,
body('username').isEmail(), 
body('password').isLength({min:5}), 
(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
    }
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