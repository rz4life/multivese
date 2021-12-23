const User = require('../src/user')
const Scooter = require('../src/scooter')

describe('User Object', () =>{

    test('user has a paymant account', () =>{

        const testUser = new User('Jeff', 100);
        expect (testUser.account).toEqual(100)
    })

    test('renting Scooter Charges account', () =>{

        const testUser = new User('Jeff', 100);
        testUser.rentScooter()
        expect(testUser.account).toEqual(80)
    })

    test('renting Scooter assigns Scooter to User', () =>{

        const testUser = new User('Jeff', 100);
        const testScooter = new Scooter('Palo Alto', true);
        testUser.rentScooter(testScooter);
        expect (testUser.scooter).toStrictEqual(testScooter)
    })
})