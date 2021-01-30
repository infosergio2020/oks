var mongoose = require('mongoose');

var cancionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
    }
});

cancionSchema.methods.toString = function() {
    return `nombre: ${this.nombre} `;
}

/*CRUD Basico BEGIN***************************************/
cancionSchema.statics.createInstance = function (nombre, email) {
    return new this({ nombre, email});
}

cancionSchema.statics.getAll = function (callback) {
    return this.find({}, callback);
}

cancionSchema.statics.add = function (usuario, callback) {
    return this.create(usuario, callback);
}

cancionSchema.statics.getById = function (id, callback) {
    return this.findOne({ _id: id }, callback);
}

cancionSchema.statics.update = function (id, nombre, callback) {
    return this.findOneAndUpdate({ _id: id }, { nombre: nombre }, { returnNewDocument: true, runValidators: true, context: 'query' }, callback); // alternative use findByIdAndUpdate
}

cancionSchema.statics.deleteById = function (id, callback) {
    return this.deleteOne({ _id: id }, callback);
}


module.exports = mongoose.model('Cancion', cancionSchema);