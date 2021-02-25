const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-basic', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruits", fruitsSchema);

Fruit.find((error, fruits) => {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log(fruits);
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});