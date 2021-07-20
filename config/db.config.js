const mongoose = require('mongoose')

const connectDB = async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    console.log("Mongo DB connected")
}

module.exports = connectDB