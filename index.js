const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

//middelware: funciones que estan entre la petivion y la respuesta
const miMiddelware = (req, res, next) => {
    console.log('hola soy un middleware');
    console.log(__dirname);
}

app.use(miMiddelware);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (reg, res) => {
    res.sendFile('index.html');
});

app.get('/ofertas', (reg, res) => {
    res.sendFile('ofertas.html');
});

app.listen(PORT, () => {
    if (err) console.log(err);
    console.log('Server is running on port http://localhost:${PORT}');
});