const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(
    (result) => {
        console.log('Connected to MongoDB');
    }
).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//create a new book schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 5,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ['fiction', 'non-fiction'],
    },
    genrics: {
        type: [String],
        default: [],
    }
});

// create a new book model
const Book = mongoose.model("Book", BookSchema);

//create a new book1
// const Book1 = new Book({
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 299,
// })

//create a new book2
// const Book2 = new Book({
//     title: "The Monk Who Sold His Ferrari",
//     author: "Robin Sharma",
//     price: 399,
// })

//book1 save
// Book1.save().then(() => {
//     console.log("Book 1 saved");
// }).catch(err => {
//     console.log("Error saving book 1:", err);
// })

//book2 save
// Book2.save().then(() => {
//     console.log("Book 2 saved");
// }).catch(err => {
//     console.log("Error saving book 2:", err);
// })


// minlength  validation
// const Book3 = new Book({
//     title: "he",
//     author: "dnwj",
//     price: 200,
// })

// Book3.save().then(() => {
//     console.log("Book 3 saved");
// }).catch(err => {
//     console.log("Error saving book 3:", err);
// })

// maxLength validation
// const Book4 = new Book({
//     title: "The Alchemist is a great book",
//     author: "Paulo Coelho",
//     price: 299,
// })
// Book4.save().then(() => {
//     console.log("Book 4 saved");
// }).catch(err => {
//     console.log("Error saving book 4:", err);
// })

// const Book5 = new Book({
//     title: "Marvel Comics",
//     author: "Stan Lee",
//     price: 499,
//     category: "fiction",
// })

// Book5.save().then(() => {
//     console.log("Book 5 saved");
// }).catch(err => {
//     console.log("Error saving book 5:", err);
// })

// const Book6 = new Book({
//     title: "Marvel Comics",
//     author: "Stan Lee",
//     price: 499,
//     category: "ds",
// })

// Book6.save().then(() => {
//     console.log("Book 6 saved");
// }).catch(err => {
//     console.log("Error saving book 5:", err);
// })

// const Book7 = new Book({
//     title: "Marvel Ceefe",
//     author: "Stan dsdLee",
//     price: 1499,
//     category: "fiction",
//     genrics: ["action", "adventure"],
// })
// Book7.save().then(() => {
//     console.log("Book 7 saved");
// }).catch(err => {
//     console.log("Error saving book 7:", err);
// })

// update in validation not working then use { runValidators: true }
// Book.findByIdAndUpdate("680520d7397fde456944e731", { price: 2222 }, { runValidators: true }, { new: true }).then((result) => {
//     console.log(result);
// }).catch(err => {
//     console.log("Error Updating book:", err);
// })


// custom validation error message
const Book8 = new Book({
    title: "Marvel Ceefe",
    author: "Stan dsdLee",
    price: -19,
    category: "fiction",
    genrics: ["action", "adventure"],
})
Book8.save().then(() => {
    console.log("Book 8 saved");
}).catch(err => {
    console.log("Error saving book 8:", err.errors.price.message);
})