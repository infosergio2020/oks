require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log(err));

db.once('open', _ => {
    console.log("Database is connected to ",process.env.MONGO_URI);
});

db.on('error', err => {
    console.log(err);
});