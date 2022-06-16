const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MarvelMoviesSchema = new Schema({
    Film: String,
    USReLeaseDate:String,
    Director:String,
    ScreenWriter:[String],
    Producer:[String]
},{ timestamps: true, versionKey: false })

const MarvelMoviesModel = mongoose.model('MarvelMovies',MarvelMoviesSchema)

module.exports = MarvelMoviesModel
