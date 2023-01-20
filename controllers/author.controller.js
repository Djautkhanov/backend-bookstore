const Author = require("../Models/Author.model");

module.exports.authorsController = {
  getAuthors: function (req, res) {
    Author.find()
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.json({ error: err });
      });
      // вывод всех авторов
  },
  addAuthors: function (req, res) {
    Author.create({
      name: req.body.name,
      infoAuthor: req.body.infoAuthor,
    })
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.json({ error: err });
      });
      // добавление авторов
  },
  deleteAuthorsById: function (req, res) {
    Author.findByIdAndDelete(req.params.id)
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.json({ error: err });
      });
      // удаление автора
  },
  editAuthorsById: function (req, res) {
    Author.findByIdAndUpdated(req.params.id, {
      name: req.body.name,
      infoAuthor: req.body.infoAuthor,
    })
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.json({ error: err });
      });
      // изминение автора
  },
};
