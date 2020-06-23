const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://USERANDPASSWORD@cluster0-tjcrc.mongodb.net/users?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

var userSchema = new Schema( {
    username: String
});

var User = mongoose.model('users', userSchema);

module.exports.User = User;