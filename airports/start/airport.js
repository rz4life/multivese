class Airport {
    constructor(terminal, location){
        this.terminal = terminal
        this.location = location,
        this.restaurants = []

    }
    addRestaurants(restaurants){
        this.restaurants.push(restaurants)
    }
}
module.exports = Airport