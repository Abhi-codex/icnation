const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

function Database() {
    const URL = "mongodb://localhost:27017/";

    mongoose.connect(URL).then(() => console.log('Database Connected'))
        .catch((err) => console.log(err));
    
}


module.exports = Database;