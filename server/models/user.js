let mongoose = require('mongoose');



module.exports = mongoose.model('User', res => {
    email: String;
    password: String
})