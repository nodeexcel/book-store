const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://books:BqdCSgfqOCCCcndh@bookstore-2zgda.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});


const books = mongoose.model('Books', {
    bookName: String,
    authorName: String,
    ISBN: String
})

module.exports = {
    books : books
}