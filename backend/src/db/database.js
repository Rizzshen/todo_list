const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL);
        console.log("connected To Database Succesfully");
    }
    catch(error){
        console.log("connection Failed:", error);
    }
    
}
module.exports = connectDB;