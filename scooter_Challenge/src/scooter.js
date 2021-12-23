class Scooter{
    constructor(station, charged){
        this.station = station
        this.charged = charged
    }

    rent(){
        if( this.charged){
            return 'Enjoy your ride today!'
        }else{
            return 'Scooter is not charged, please select a charged scooter'
        }
    }
}

module.exports = Scooter