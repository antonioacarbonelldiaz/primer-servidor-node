const express = require('express')

const app = express()

app.get('/', function(req, res) {

    res.send('Esta es mi primera aplicación !!')
})

app.listen(3000)

