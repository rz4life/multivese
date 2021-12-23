class Pet{
    constructor(name, species){
        this.name = name
        this.species = species
    }

    givePaw(){
        if( this.species === ''){
            return 'here is my paw ...'
        }
    }
}

const jinsBunny = new Pet('Basil', 'Bunny')
const andresDog = new Pet ('lula', 'Dog')


module.exports = Pet