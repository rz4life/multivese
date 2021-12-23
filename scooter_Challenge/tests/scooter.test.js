const Scooter = require ("../src/scooter");


describe( "scooter Object properties", ()  =>{
    test(' Scooter is an object with a location', () =>{
        const testScooter = new Scooter('Brooklyn');

        expect(typeof testScooter).toBe('object');
        expect(testScooter.station).toBe('Brooklyn')
    })
})

describe('Scooter Object Mthods', () =>{

    test('charged scooter can be rented', () =>{
        const testScoooter = new Scooter('Chicago', true)
        expect(testScoooter.rent()).toBe('Enjoy your ride today!');
    })

    test('scooter with no charge cannot be rented', () =>{
        const testScooter = new Scooter ('Chicago', false);
        expect (testScooter.rent()).toBe('Scooter is not charged, please select a charged scooter')
    })
})