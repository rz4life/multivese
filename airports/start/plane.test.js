const Plane = require("./plane")
const Passengers = require("./Person")

describe ('Plane Class', () =>{
    const testPlane = new Plane ('B500','Abdulrazaq Alagbada','Nigeria','London');
    const passenger1 = new Passengers('Constance', '#3254','passportNumber1','A1');
    const passenger2 = new Passengers('Michael', '#3255', 'passportNumber2','A2');
    const crew1 = {name:"guayo", yearOnTeam: "20"}      

    test('has a ticket number ', () =>{
        expect(testPlane.flightNumber).toBe('B500');
    })

    test('for passengers', () =>{
      testPlane.addPassenger(passenger1)
      testPlane.addPassenger(passenger2)
      testPlane.addCrew(crew1)
      expect(testPlane.pilot).toBe('Abdulrazaq Alagbada')
      expect(testPlane.origin).toBe('Nigeria')
      expect(testPlane.destination).toBe('London')
      expect(testPlane.crew[0].name).toBe('guayo')
      expect(Array.isArray(testPlane.passengers)).toBeTruthy();
      expect(Array.isArray(testPlane.crew)).toBeTruthy();
      expect(testPlane.passengers.length).toBe(2)
      expect(testPlane.passengers[0].ticketNum).toBe('#3254')
      expect(testPlane.passengers[1].ticketNum).toBe('#3255')
      expect(testPlane.passengers[0].passport).toBe('passportNumber1')
      expect(testPlane.passengers[1].passport).toBe('passportNumber2')
      expect(testPlane.passengers[0].role).toBe('A1')
      expect(testPlane.passengers[1].role).toBe('A2')
      
    })
})