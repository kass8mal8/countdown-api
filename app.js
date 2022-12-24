const express = require('express')
const app = express()

const tracksRoute = require('./routes/tracks')
const artistRoute = require('./routes/artist')

app.use('/tracks', tracksRoute)
//app.use('/artist', artistRoute)

module.exports = app