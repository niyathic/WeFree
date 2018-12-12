var mongoose = require('mongoose');

//Schema (mongoose terminology) that structures all entries of type User that enter into our mongodb database. 
//Mongoose will require that these User records have these fields
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // googleIntegrated: boolean,
    events: Object
})

//Export a model(basically the functional version of the Schema) that is preloaded with all of the fancy methods that mongoose gives to us(like .find, .remove, etc).
module.exports = mongoose.model('User', userSchema);
