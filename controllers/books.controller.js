const Book = require("../Models/Book.model")

module.exports.bookController = {
    addBook: function(req, res) {
        Book.create({
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
            
        }).then((book) => {
            res.json(book);
        }).catch((err) => {
            res.json({error: err})
        })
            // - добавление книги
    },
    deleteBookByid: function(req, res) {
        Book.findByIdAndDelete(req.params.id).then((book) => {
            res.json(book);
        }).catch((err) => {
            res.json({error: err})
        })
        // - удаление книги
    },
    editBookById: function(req, res) {
        Book.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
            
        }).then((book) => {
            res.json(book);
        }).catch((err) => {
            res.json({error: err})
        })
        // - изменени книги
    },
    getBookById: function(req, res) {
        Book.findById(req.params.id).then((book) => {
            res.json(book);
        }).catch((err) => {
            res.json({error: err})
        })
        // - вывод определенной книги 
    },
    getBooks: function(req, res) {
        Book.find().then((book) => {
            res.json(book);
        }).catch((err) => {
            res.json({error: err})
        })
        // - вывод всех книги
    },
    getBookByGenreId: function(req, res) {
        Book.findOne({genre : req.params.genreId}).then((book) => {
            res.json(book);
        }).catch((err) => {
            res.json({error: err})
        })
        // - вывод всех книги из определенного жанра
    },
    
}