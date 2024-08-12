const mongoose = require('mongoose');

const uri = 'mongodb+srv://ankith1092:ankith%405spaces@project.hep6b.mongodb.net/project?retryWrites=true&w=majority';

mongoose.connect(uri, {
    tls: true,

}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
