const express = require('express')
const router = express.Router()
const fs = require('fs')


const fileLocation = './resources/messages.json'

// GET request for all messages

router.get('/', (req, res) => {
    res.setHeader('Content-Type','application/json')
    fs.readFile(fileLocation, (err, data) => {
        if(err) res.status(500).send(err)

        res.send(data)
    })
})


// POST request to add new message

router.post('/', (req, res) => {
    res.setHeader('Content-Type','text/json')
    fs.readFile(fileLocation, (err, data) => {
        if(err) return res.status(500).send(err)

        const messages = JSON.parse(data)
        const message = req.body
        message.id = messages.length + 1

        messages.push(message)

        fs.writeFile(fileLocation, JSON.stringify(messages), err => {
            if(err) res.status(500).send(err)

            res.send('Success')
        })
    })
    
})

module.exports = router