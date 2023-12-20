const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})


app.listen(3000, () => {
    console.log('here for a drink')
})