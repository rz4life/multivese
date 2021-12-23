const Pet = require('./pet')
describe ('Pet Class', () =>{
    test ('pet name', () =>{
        const jinsBunny = new Pet('Basil', 'Bunny')
        expect (jinsBunny.name).toBe('Basil')
    })
})