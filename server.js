const express = require('express')
const drinks = require('./models/drinks.js')


const app = express()

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
app.get("/drinks", (req, res) => {
    // res.send(drinks)
    res.render("index.ejs", {drinks})
})

for (const drink in drinks) {
    if (typeof drinks[drink].name === "string") {
      drinks[drink].name = drinks[drink].name.charAt(0).toUpperCase() + drinks[drink].name.slice(1);
    }
  }
  
//   console.log(drinks)

app.listen(3000, () => {
    console.log('here for a drink')
})

app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})
