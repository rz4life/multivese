const { Sequelize } = require('./db')
const {Game} = require('./models/Game')
const {User} = require('./models/User')

describe('test for game and user on table', () =>{

    test('has a game', async() =>{
        const gamePromises =  await Game.create({name: "FF7", platform: "PS4"})
        
        expect(gamePromises.name).toBe('FF7')
        expect(gamePromises.platform).toBe('PS4')
    })
    
    test('has a user', async() =>{
        const userPromises = await User.create({email: "malik@gmail.com", password: "password1"}) 
        expect(userPromises.email).toBe('malik@gmail.com')
        expect(userPromises.password).toBe('password1')
    })

    test('a user has multiple games', async () =>{
        const user = await User.create({email: "malik@gmail.com", password: "password1"})
        const game1 = await Game.create({name: "FF7", platform: "PS4"})
        const game2 = await Game.create({name: "FIFA 2022", platform: "PS5"})


        await user.addGame(game1)
        await user.addGame(game2)

        const games = await user.getGames()

        expect(games.length).toBe(2)
    })
    
})
