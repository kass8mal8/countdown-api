const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const msgRoute = require('./routes/messages')

app.use(bodyParser.json())
app.use('/messages', msgRoute)

module.exports = app