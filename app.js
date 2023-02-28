const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, this is the root route');
});

app.listen(3000);

app.get('/uno', (req, res) => {
    res.send('Hello World, from the route One');
});

app.get('/prueba', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Prueba</title>
</head>
<body>
    <h1>Head 1</h1>
</body>
</html>`);
});