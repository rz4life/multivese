// const User = require ("../src/user");
class Scooter{
    constructor(station, charged, user){
        this.station = station
        this.charged = charged
        this.user = user
    }

    rent(){
        if( this.charged && this.user.age >= 18 && this.user.location == this.station){
            return 'Enjoy your ride today!'
        }else if ( this.charged == false){
            return 'Scooter is not charged, please select a charged scooter'
        }else if( this.user.age < 18){
            return 'Sorry user must be 18 or older'
        }else if( this.user.location != this.station){
            return 'Sorry you can only rent a scooter in your city'
        }
      
    }
    async charge(){

        console.log(' Starting Charge ')
        await new Promise(charge => setTimeout(charge, 2000))
        console.log(' Charge complete ')
        return 'Charge completed'
    }
}

module.exports = Scooter