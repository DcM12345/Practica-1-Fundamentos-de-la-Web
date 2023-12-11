const express = require("express");
const fs = require("fs");
const app = express();
const Port = 3024;

app.use(express.static('styles'));
app.use(express.static('public'));
app.use(express.static('tmp'));
app.use(express.urlencoded({ extended: true }));


app.get('/error', (req, res) => {
    res.sendFile(__dirname + '/public/error.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Practica1.html');
});

app.get('/notesList', (req, res) => {
    var notesHTML = "";
    var files = fs.readdirSync(__dirname + '/tmp');
    for (var filename of files) {
        notesHTML += fs.readFileSync(__dirname + '/tmp/' + filename);
    }
    res.send(notesHTML);
});

app.post('/guardarNota', (req, res) => {
    const { subelemento, descripcion, imagen } = req.body;

   
    if (!subelemento || !descripcion || !imagen) {
        
        res.redirect('/error');
        return;
    }

    const files = fs.readdirSync(__dirname + '/tmp');

   
    const nextNumber = files.length + 1;

    const fileName = `Nota${nextNumber}.html`;


    const notaContent = `<div class="col-md-4">
        <a href="PaginaDetalle.html?nota=${nextNumber}" class="tarjeta">
            <div class="card mb-4">
                <img src="${imagen}" class="card-img-top" alt="${subelemento}">
                <div class="card-body">
                    <h5>${subelemento}</h5>
                </div>
            </div>
        </a>
    </div>`;

    fs.writeFileSync(__dirname + '/tmp/' + fileName, notaContent);

   
    res.redirect('/');
});

app.listen(Port, () => {
    console.log('Servidor escuchando en puerto', Port);
});
