const redirect = require('./routes/redirect.route')
const url = require('./routes/url.route')

require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./config/db.config')
connectDB()

//Middleware

app.use(express.json())
app.use('/', redirect)
app.use('/api/url', url)



const PORT= process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})