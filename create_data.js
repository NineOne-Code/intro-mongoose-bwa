const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-basic', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruits", fruitsSchema);

// const apple = new Fruit({
//     name: "Apple",
//     rating: 8,
//     review: "Rasanya kek yang mo meninggoy"
// });

// apple.save(error => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Berhasil simpan apel kedalam database");
//     }
// })

const jeruk = new Fruit({
    name: "Jeruk",
    rating: 9,
    review: "Rasanya asem manis"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Dabest dah pokoknya"
});

const pisang = new Fruit({
    name: "Pisang",
    rating: 5,
    review: "Rasanya tidak seperti pisang pada umumnya"
});

Fruit.insertMany([kiwi, jeruk, pisang], error => {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Berhasil simpan buah kedalam database");
    }
})