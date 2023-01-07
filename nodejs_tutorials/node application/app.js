// const http = require('http')

// const fs = require('fs');


// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/example.json');
//     res.writeHead(200, {'Content-type' : 'application/json'});
//     readStream.pipe(res);
// }).listen(3000);

const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))
//GET REQUEST
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// app.get('/example/:name/:age', (req, res)=>{
//     res.send(req.params.name + " : " + req.params.age);
//     console.log(res.query);
// });


app.listen(3000);   