var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var WidgetModel = new Schema({
        id: Number,
      name: String,
     color: String,
     price: Number,
     melts: Boolean,
 inventory: Number
});

WidgetModel.plugin(autoIncrement.plugin, { model: 'Widget', field: 'id' });
module.exports = mongoose.model('Widget', WidgetModel);
