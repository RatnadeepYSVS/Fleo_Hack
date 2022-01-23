const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
const db_connect = require('./db_connect').connect_db
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
    // app.get('/', (req, res) => {
    //     res.send('<h1>Hello</h1>')
    // })
db_connect()
app.use(require('./routes/category'))
app.listen(port, () => console.log(`Server running at ${port}`))