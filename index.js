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

app.listen(HTTP_SERVER_PORT, () => console.log(`Listening on port ${HTTP_SERVER_PORT}...`));