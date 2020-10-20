const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const item = require('./routes/api/items')

const app = express()

//bodyParser middleware
app.use(bodyParser.json())

//DB
const db = require('./config/keys').mongoURI

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('database connected')
}).catch(err => {
    console.log(err)
})


app.use('/api/items', item)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`))