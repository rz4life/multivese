const Bag = require('./bag')

describe('Bag Class', () =>{
    const testBag = new Bag("Constance", "25kg");

    test ("test for Bag", () =>{
        
        expect (testBag.owner).toBe('Constance')
        expect (testBag.weight).toBe('25kg')
    })

})