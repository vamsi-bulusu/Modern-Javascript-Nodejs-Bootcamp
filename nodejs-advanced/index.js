//clustering is a technique used to create multiple server instances. 
const cluster = require('cluster');

// Is the file is being executed in master mode?
if(cluster.isMaster){
    //cause index.js to be executed again but in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
}else{
    // Im a child and I am going to act like a server and do nothing else        
    const express = require('express');
    const app = express();

    function doWork(duration){
        const start = Date.now();
        while(Date.now() - start < duration){}
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi There');
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast');
    });

    app.listen(3000);
}
