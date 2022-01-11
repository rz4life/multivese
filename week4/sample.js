const sqlite3 = require('sqlite3').verbose();


// let db = new sqlite3.Database('./sample.db',sqlite3.OPEN_READWRITE, (err) =>{
//     if(err){
//         return console.error(err.message);
//     }
//     console.log('connected to the in-memory SQlite database ')
// });


let db = new sqlite3.Database('./sample.db');
// db.run('CREATE TABLE langs(name text)')

// db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function(err){

//  if(err){
//      return console.log(err.message)
//  }
//  console.log(`A row has been inserted with rowid ${this.lastID}`)
// })

let languages = ['c++', 'Python','Java', 'c#', 'Javascript']
let placeholders = languages.map((language) => '(?)').join(',')
let sql = `INSERT INTO langs(name) VALUES` +placeholders

console.log(sql)

db.run(sql,languages, function(err){
    if(err){
        return console.log(err.messages)
    }
    console.log(`Rows inserted ${this.changes}`)
})
db.close((err) =>{
    if(err){
        return console.error(err.message)
    }
    console.log('closed the database connection.')
})
