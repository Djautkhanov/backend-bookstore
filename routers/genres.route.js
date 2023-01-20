const { Router } = require("express");
const { genreController } = require("../controllers/Genres.controller");

const router = Router();

// - добавление жанра
router.post("/genres", genreController.addGenre);

// - удаление жанра
router.delete("/genres/:id", genreController.deleteGenreById);

// - вывод всех жанров
router.get("/genres", genreController.getCenre);

module.exports = router;
