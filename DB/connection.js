const mongoose = require('mongoose')
const URI = "mongodb+srv://dbUser:dbUser@cluster0.nusce.mongodb.net/admin?retryWrites=true&w=majority"




mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true});

const connectDB = mongoose.connection;
connectDB.once('open',()=>{
    console.log("MongoDB database connection establish successfully");
})


module.exports = connectDB