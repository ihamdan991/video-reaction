const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname) + "/public"))
app.set("views", path.join(__dirname) + "/views")

app.get('/', (req, res) => {
    res.render('home-page', {})
});

app.get('/watch', (req, res) => {
    res.redirect('/')
});

app.get('/watch/:uuid', (req, res) => {
    res.render('watch', { uuid: req.params.uuid })
});

app.get('/video', (req, res) => {
    res.render('video', {})
});


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () => console.log('Listening on port 3000!'))
