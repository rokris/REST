var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    tittel: String,
    innhold: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
