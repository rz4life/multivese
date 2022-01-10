class player{
    constructor(name){
        this.name = name;
        this.attacks = ["small attack", "big attack"]
    }
}

class monster{
    constructor(name){
        this.name =name;
        this.attacks =["small attack", "big attack"]

    }
}

let player1 = new player("rz")
let monster1 = new monster("small monster")
let map = []
function generateMap (map,option){
    let newArr = []
    if(option === "generate"){
     newArr= map.push(     [0,0,0,0],
                           [0,0,0,0],
                           [0,0,0,0],
                           [0,0,0,0])
    }else if(option === "reset"){
        newArr = []
    }
    return newArr
}
generateMap(map,"generate")

function spawn (map){
    let playerNum = Math.floor(Math.random() * 3)
    let playerNum2 = Math.floor(Math.random() * 3)

    let count = 0

    while ( count < 6 ){
        let monsterNum = Math.floor(Math.random() * 3)
        let monsterNum2 = Math.floor(Math.random() * 3)
        if( map[monsterNum][monsterNum2] !== "M"){
            count ++
        }

        map[monsterNum][monsterNum2] = "M"
    
        let startstopbattle = false
        if(playerNum == monsterNum && monsterNum2 == playerNum2 ){
           console.log("start fight")
           startstopbattle = true
           battle(player1,monster1,startstopbattle )
       }

    }
    map[playerNum][playerNum2] = "P"
}

spawn(map)

function battle(player, monster, startstopbattle ){
    let playerNum = Math.floor(Math.random() * 2)
    let monsterNum = Math.floor(Math.random() * 2)

    let playerAttack = player.attacks[playerNum]
    let monsterAttack = monster.attacks[monsterNum]
    if(startstopbattle ){
        if(playerAttack === "big attack" && monsterAttack === "big attack"){
            console.log("player defeted monster")
        }
        else if(playerAttack === "small attack" && monsterAttack === "small attack"){
            console.log("monster defeted player")
        }
        else if(playerAttack === "small attack" && monsterAttack === "big attack"){
            console.log("monster defeted player")
        }else if(playerAttack === "big attack" && monsterAttack === "small attack"){
            console.log("player defeated monster")
        }
    }
}

console.log(map)