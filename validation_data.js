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

const mangga = new Fruit({
    name: "Mangga",
    rating: 10,
    review: "Rasanya kek yang mo meninggoy"
});

mangga.save(error => {
    if (error) {
        mongoose.connection.close();
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Berhasil simpan Mangga kedalam database");
    }
})