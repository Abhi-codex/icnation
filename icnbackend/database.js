const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

function Database() {
    const URL = process.env.DB;

    mongoose.connect(URL).then(() => console.log('Database Connected'))
        .catch((err) => console.log(err));
    
}


module.exports = Database;