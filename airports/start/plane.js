class Plane {
    constructor(flightNumber, pilot, origin, destination){
        this.flightNumber = flightNumber
        this.passengers = [],
        this.pilot = pilot,
        this.origin = origin,
        this.destination = destination,
        this.crew = [] 
    }
    addPassenger(person){
        this.passengers.push(person)
    }
    addCrew(Person){
        this.crew.push(Person)
    }
}

module.exports = Plane 