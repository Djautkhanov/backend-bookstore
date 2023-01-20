const Genres = require("../Models/Genre.modul")

module.exports.genreController = {
    addGenre: function (req, res) {
        Genres.create({
            name: req.body.name,
            text: req.body.text,
        }).then((genre) =>{
            res.json(genre);
        }).catch((err) => {
            res.json({ error: err})
        })
        // - добавление жанра
    },
    deleteGenreById: function (req, res) {
        Genres.findByIdAndDelete(req.params.id).then((genre) =>{
            res.json(genre);
        }).catch((err) => {
            res.json({ error: err})
        })
        // - удаление жанра
    },
    getCenre: function (req, res) {
        Genres.find().then((genre) =>{
            res.json(genre);
        }).catch((err) => {
            res.json({ error: err})
        })
        // - вывод всех жанров
    },
}