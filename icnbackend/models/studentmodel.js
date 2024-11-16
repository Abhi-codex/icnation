const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    issuedate: { type: String, require: true },
    certificatenumber: { type: String, require: true }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Student', studentSchema, 'students');