const HTTP_SERVER_PORT = 3000;

const express = require('express');
const app = express();
const addModule = require('./math-operations/add');
const addModule2 = require('./math-operations/circle-params');

// setting routing https://expressjs.com/en/starter/basic-routing.html
app.get('/api/add/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    try {
        const sum = { a: a, b: b, sum: addModule.add(a, b) };
        res.send(JSON.stringify(sum));
    } catch (e) {
        res.status(400).json({ error: e })
    }
})

app.get('/api/circle-params/:r1/:r2/', (req, res) => {
    const r1 = req.params.r1;
    const r2 = req.params.r2;
    
    try {
        const circle = { r1: r1, r2: r2, circleField: addModule2.circleField(r1),circleCircuit: addModule2.circleCircuit(r2) };
         res.send(JSON.stringify(circle));
        
    } catch (e) {
        res.status(400).json({ error: e })
    }
})


app.listen(HTTP_SERVER_PORT, () => console.log(`Listening on port ${HTTP_SERVER_PORT}...`));