const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl : String,
    date : {
        type: String,
        default: Date.now
    }
})

const URL = mongoose.model('url', urlSchema)

module.exports = URL