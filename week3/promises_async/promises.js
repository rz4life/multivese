// let myPromise = new Promise((resolve,reject) =>{

//     //define some sort of async task 



//     const foundUser = Math.floor(Math.random() * 2) //0 or 1

//     if (foundUser === 0 ){
//         resolve()
//     }else{
//         reject()
//     }
// })

// myPromise.then(()=>{
//     console.log('User has been found')
// }).catch(() =>{
//     console.log("User failed to be found")
// })




function check (password) {
    let i = 0;
    let check = 0
    while( i <= password.length){
        let character = password.charAt(i)
        if( character == character.toUpperCase()){
            check = check + 1
        }
        if( character == character.toLowerCase()){
            check = check + 1
        }
        i++
    }
    return check
}


let newPromise = new Promise((resolve, reject) =>{

    const users = [ {username: "razaqalagbada@gmail.com", password: 'abdulRazaq1'}, 
                {username: "razaq", password: "bigBoss"}, {username:"", password:""}, 
                {username:"stanley@constance.com", password:"reneJin"}
]

    const userGenerator = Math.floor(Math.random() * users.length)

    
    if( users[userGenerator].username.includes('@') && check(users[userGenerator].password) >= 2){
        resolve()
    }else{
        reject()
    }

})

newPromise.then(() =>{
    console.log(" User has a valid username and password")
}).catch(() =>{
    console.log("the username or password is invalid, try again")
})

