class User{
    constructor(name, dollars,age, location){
        this.name = name
        this.account = dollars
        this.scooter = {}
        this.age = age
        this.location = location 
    }

    rentScooter(scooter){
        this.account = this.account - 20;
        this.scooter = scooter
    }
}

module.exports = User