const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const MarvelMoviesModel = require('./models/MarvelMovies');

mongoose.connect('mongodb+srv://Admin:Password@person.gpxmmb7.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>หน้าแรก</h1>')
})

app.post('/MarvelMovies', async (req, res) => {
    const payload = req.body
    const product = new MarvelMoviesModel(payload)
    await product.save()
    res.status(201).end()
})

app.get('/MarvelMovies', async (req, res) => {
    const marvelMovies = await MarvelMoviesModel.find()
    res.json({ marvelMovies })
})

app.get('/MarvelMovies/Film/:name', async (req, res) => {
    const film = req.params.name
    const marvelMoviesModel = await MarvelMoviesModel.find({ Flim: film })
    res.json({ marvelMoviesModel })
})

app.get('/MarvelMovies/:id', async (req, res) => {
    const id = req.params.id
    const marvelMoviesModel = await MarvelMoviesModel.findById(id)
    res.json({ marvelMoviesModel })
})

app.delete('/MarvelMovies/:id', async (req, res) => {
    const { id } = req.params;
    await MarvelMoviesModel.findByIdAndDelete(id);
    res.status(204).end();
});

app.put('/MarvelMovies/:id', async (req, res) => {
    const payload = req.body
    const { id } = req.params;
    console.log(payload)
    const marvelMovies = await MarvelMoviesModel.findByIdAndUpdate(id, { $set: payload });
    res.json(marvelMovies);
});

app.listen('8000', () => {
    console.log('server is start')
})

