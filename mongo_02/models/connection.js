const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test%40123@cluster0.obzkur0.mongodb.net/')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports=mongoose;