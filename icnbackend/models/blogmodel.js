const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, require: true},
    author: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Blog', blogSchema, 'blogs');