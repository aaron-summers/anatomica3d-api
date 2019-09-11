const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
require('dotenv/config')

//importing routes
const systemsRoute = require('./Routes/systems')

//middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5050");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use('/systems', systemsRoute)

app.get('/', (req, res) => {
    res.send('home')
})

mongoose.connect(`${process.env.DB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true}).catch((error) => console.log(error))

app.listen(port, () => console.log(`Example app listening on ${port} port!`))