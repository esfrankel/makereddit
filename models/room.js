const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  topic: { topic: String, required: true}
});

module.exports = mongoose.model('Room', RoomSchema);
