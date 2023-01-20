const { Router } = require("express");
const { bookController } = require("../controllers/books.controller");
const router = Router();

// - добавление книги
router.post("/books", bookController.addBook);

// - удаление книги
router.delete("/books/:id", bookController.deleteBookByid);

// - изменени книги
router.patch("/books/:id", bookController.editBookById);

// - вывод определенной книги
router.get("/books/:id", bookController.getBookById);

// - вывод всех книги
router.get("/books", bookController.getBooks);

// - вывод всех книги из определенного жанра
router.get("/books/genre/:genreId", bookController.getBookByGenreId);

module.exports = router;
