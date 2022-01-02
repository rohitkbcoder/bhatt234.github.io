const mongoose = require('mongoose');
// getting-started.js
//setting up mongoose 
//giving it Schema
//definning it
mongoose.connect('mongodb://localhost:27017/contactdance', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("we are connected");
});
const contactschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    desc: String
});
const Contact = mongoose.model('Contact', contactschema);
module.exports=(Contact)