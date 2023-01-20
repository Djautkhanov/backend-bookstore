const { Router } = require("express");
const { authorsController } = require("../controllers/author.controller");

const router = Router();

// вывод всех авторов
router.get("/authors", authorsController.getAuthors);

// добавление авторов
router.post("/author", authorsController.addAuthors);

// удаление автора
router.delete("/author/:id", authorsController.deleteAuthorsById);

// изминение автора
router.patch("/author/:id", authorsController.editAuthorsById);

module.exports = router;
