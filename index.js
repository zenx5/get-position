const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8080;
let indexFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html",'utf8', function(err, data){
    if(!err){
        indexFile = data;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    }else{  
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    }
    
})
    