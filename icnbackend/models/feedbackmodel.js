const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    email: { type: String, require: true},
    name: { type: String, require: true },
    phone: { type: Number, require: true },
    feedback: { type: String, require: true }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Feedback', feedbackSchema, 'feedbacks');