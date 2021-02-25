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

// Fruit.updateOne({_id: '600901966bdfa417a8f0da94'}, {name: 'Nanas'}, error => {
//     if (error) {
//         console.log(error);
//     } else {
//         mongoose.connection.close();
//         console.log(`Berhasil update data menjadi Nanas ke Database`);
//     }
// });

Fruit.deleteOne({_id: '600901966bdfa417a8f0da94'}, error => {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log(`Berhasil delete data dari Database`);
    }
});