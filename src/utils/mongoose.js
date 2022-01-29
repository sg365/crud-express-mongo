const mongoose = require('mongoose');
const conn = {};

const mongoDB = 'mongodb://mongo/crud_express';
conn.connectDB = async () => {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        console.log("Mongodb connected");
    } catch (err) {
        console.error(err);
    }
}

module.exports = conn;