const express = require('express')

const app = express();
const port = 3000;

app.use(express.static('public'));
let data = ['1','2']
app.get("/now", (request, response) => {
    const date = new Date();
    response.send(date);
  });

app.listen(port, () =>{
    console.log("SERVER IS WORKING")
})