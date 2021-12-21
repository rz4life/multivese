const Person = require('./Person')

describe(' Person Class', () =>{

    const testPerson = new Person('RZ','#3256');

    test('has a name', () =>{
        expect (testPerson.name).toBe('RZ');
        expect (testPerson.ticketNum).toBe('#3256');
    })
})