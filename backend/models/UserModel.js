
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({   
    name: String,
    usercomment: String,
    type: Date,
   
})

const User = mongoose.model('User', CommentSchema);
module.exports = User;