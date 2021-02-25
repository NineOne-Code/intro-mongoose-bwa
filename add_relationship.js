const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-basic', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data nama tidak ada, mohon diisi!!!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruits", fruitsSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data nama tidak ada, mohon diisi!!!']
    },
    age: {
        type: Number
    },
    favorite: fruitsSchema
});

const People = mongoose.model("People", peopleSchema);

const duku = new Fruit({
    name: "Duku",
    rating: 10,
    review: "Nice!!"
});

duku.save(error => {
    if (error) {
        mongoose.connection.close();
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Berhasil simpan Duku kedalam database");
    }
});

const nine = new People({
    name: "Nine",
    age: 19,
    favorite: duku
});

nine.save(error => {
    if (error) {
        mongoose.connection.close();
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Berhasil relationship database");
    }
});