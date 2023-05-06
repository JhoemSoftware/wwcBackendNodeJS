const mongoose = require('mongoose');
require('colors');

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('¡Database connection successfull! 👍'.bgGreen);
    } catch (error) {
        console.clear();
        console.error('Error Database connection 🤔'.bgRed);
        throw new Error('Error Database connection 🤔'.bgRed);
    }
}

module.exports = dbConn;