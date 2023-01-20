const Review = require("../Models/Review.model");

module.exports.reviewController = {
  getReviewByBookId: function (req, res) {
    Review.find({ book: req.params.bookId })
      .then((review) => {
        res.json(review);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // - вывод всех рецензий к определенной книге
  },
  addReviewByBookId: function (req, res) {
    Review.create(
      { book: req.params.bookId },
      {
        text: req.body.text,
        nameAuthorReview: req.body.nameAuthorReview,
        book: req.body.book,
      }
    )
      .then((review) => {
        res.json(review);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // - добавление рецензии к определенной книге
  },
  delteReviewById: function (req, res) {
    Review.findByIdAndDelete(req.params.id)
      .then((review) => {
        res.json(review);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // - удалени рецензии
  },
  editReviewByBookId: function (req, res) {
    Review.findByIdAndUpdate(req.params.id, {
      text: req.body.text,
      nameAuthorReview: req.body.nameAuthorReview,
      book: req.body.book,
    })
      .then((review) => {
        res.json(review);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // - изминение определенной рецензии
  },
};
