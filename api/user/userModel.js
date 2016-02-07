var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var UserSchema = new Schema({
       id: Number,
     name: String,
 gravatar: String
});

UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id' });
module.exports = mongoose.model('User', UserSchema);
