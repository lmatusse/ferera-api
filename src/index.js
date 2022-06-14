const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

const modeloCategoria = require('../models').Categoria
const modelOrdem = require('../models').Ordem
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.post('/createcategoria', async(req, res) => {
    await modeloCategoria.create(req.body)

    .then((data) => {
            res.json({ dados: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})
app.post('/createordem', async(req, res) => {
    await modelOrdem.create(req.body)

    .then((data) => {
            res.json({ dados: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})
app.get('/listordems', (req, res) => {
    modelOrdem.findAll({
            include: [{ model: modeloCategoria }]
        })
        .then((data) => {
            res.json({ dados: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})
app.put('/updateordems/:id', (req, res) => {
    modelOrdem.update(req.body, {
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({ dados: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3300

app.listen(port, () => console.log(`Server started in http://localhost:${port} or ${protocol}://${ip}:${port}`));