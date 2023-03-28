const mongoose = require("mongoose")

const connectDB = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.DBHOST)
    } catch (error) {
        console.log("MONGO ERROR " + error);
    }
}

module.exports = connectDB