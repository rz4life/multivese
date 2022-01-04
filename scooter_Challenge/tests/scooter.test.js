const Scooter = require ("../src/scooter");
const User = require('../src/user')


describe( "scooter Object properties", ()  =>{
    test(' Scooter is an object with a location', () =>{
        const testScooter = new Scooter('Brooklyn');

        expect(typeof testScooter).toBe('object');
        expect(testScooter.station).toBe('Brooklyn')
    })
})

describe('Scooter Object Mthods', () =>{

    test('charged scooter can be rented', () =>{
        const testUser = new User('Jeff', 100, 19, 'Chicago');
        const testScoooter = new Scooter('Chicago', true, testUser)
        expect(testScoooter.rent()).toBe('Enjoy your ride today!');
    })

    test('scooter with no charge cannot be rented', () =>{
        const testUser = new User('Jeff', 100, 19, 'Chicago');
        const testScooter = new Scooter ('Chicago', false ,testUser);
        expect (testScooter.rent()).toBe('Scooter is not charged, please select a charged scooter')
    })
    test(' Users age', () =>{
        const testUser = new User('rasheed' , 100, 16, 'Texas')
        const testScooter = new Scooter ('Texas', true, testUser)
        expect (testScooter.rent()).toBe('Sorry user must be 18 or older')
    })
    test (' scooter and user location must match ', () =>{
        const testUser = new User('rasheed' , 100, 29, 'Texas')
        const testScooter = new Scooter ('Chicago', true, testUser)
        expect (testScooter.rent()).toBe('Sorry you can only rent a scooter in your city')
    })

    test('charge a scooter', async () =>{
        const testUser = new User('rasheed', 100, 29, 'Texas')
        const testScooter = new Scooter ('Chicago', false, testUser)
        const charge = await testScooter.charge()
        if (charge == 'Charge completed'){
            testScooter.charged = true
        }
        expect ( testScooter.charged).toBeTruthy();
    })
})