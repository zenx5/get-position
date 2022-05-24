import express from 'express'
import fs from 'fs';
import path from 'path'
const app = express();
const port = 3000

app.use(express.static('public'));

    app.get('/', (req, res)=>{
    console.log('hola')
    const file = fs.readFileSync(path.resolve('public/index.html'));
    res.end(file);
})

app.listen(port, ()=>{
    console.log('Express running in port '+port)
})