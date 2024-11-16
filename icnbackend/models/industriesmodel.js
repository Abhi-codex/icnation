const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const industrySchema = new Schema({
    name: { type: String, require: true },
    location: { type: String, require: true },
    personname: { type: String, require: true},
    phone: { type: Number, require: true }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Industry', industrySchema, 'industrys');