const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

// - добавление рецензии к определенной книге
router.post("/reviews/book/:bookId", reviewController.addReviewByBookId);

// - удалени рецензии
router.delete("/reviews/:id", reviewController.delteReviewById);

// - вывод всех рецензий к определенной книге
router.get("/reviews/:bookId", reviewController.getReviewByBookId);

// - изминение определенной рецензии
router.patch("/reviews/:id", reviewController.editReviewByBookId);

module.exports = router;
