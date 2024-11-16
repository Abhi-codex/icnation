const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: { type: String, require: true },
    location: { type: String, require: true },
    workshop: { type: String, require: true },
    email: { type: String, require: true},
    phone: { type: Number, require: true }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('School', schoolSchema, 'schools');