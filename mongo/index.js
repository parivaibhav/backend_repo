const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(
    (result) => {
        console.log('Connected to MongoDB');
    }
).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model('User', userSchema);


User.insertMany([
    { name: 'Vaibhav Pari', email: 'vaibhavpari@gmail.com', age: 20 },
    { name: 'Manan', email: 'manan@gmail.com', age: 25 },
    { name: 'Rajat', email: 'rajat@gmail.com', age: 30 },
])

// const user1 = new User({
//     name: 'John Doe',
//     email: 'johndoe@gmail.com',
//     age: 48,
// })

// const user2 = new User({
//     name: 'Vaibhav',
//     email: 'vaibhav@gmail.com',
//     age: 20,
// })

// user1.save().then(() => {
//     console.log('User 1 saved');
// }).catch(err => {
//     console.log('Error saving user 1:', err);
// })

// user2.save();