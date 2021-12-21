const Airport = require("./airport")

describe('test for Airport', () =>{

    const testAirport = new Airport('terminal 6', 'Austin Tx')
    const restaurant1 = {name: 'chuckyCheese'}
    const restaurant2 = {name: 'Mcdonalds'}

    test('has a terminal', () =>{
        expect(testAirport.terminal).toBe('terminal 6')
    })

    test('has a location', () =>{
        expect(testAirport.location).toBe('Austin Tx')
    })

    test('has restaurants', () =>{
        testAirport.addRestaurants(restaurant1)
        testAirport.addRestaurants(restaurant2)

        expect(Array.isArray(testAirport.restaurants)).toBeTruthy();
        expect(testAirport.restaurants[0].name).toBe('chuckyCheese')
        expect(testAirport.restaurants[1].name).toBe('Mcdonalds')

    })

})