const mongoose = require('mongoose');
require('colors');

const dbConnMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('¡Database MongoDB connection successfull! 👍'.bgGreen);
    } catch (error) {
        console.clear();
        throw new Error('Error Database MongoDB connection 🤔'.bgRed);
    }
}

module.exports = dbConnMongo;