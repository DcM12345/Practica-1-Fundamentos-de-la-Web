const { publicDecrypt } = require("crypto");
const express = require("express")
const fs = require("fs")
const app= express();
const Port= 3001
app.use(express.static('styles'));
app.use(express.static('public'));

var notesHTML = ""
var files = fs.readdirSync(__dirname + '/tmp');
for (var filename of files) {
    notesHTML += fs.readFileSync(__dirname + '/tmp/' + filename)
}

app.get('/', (req,res)=> {
    res.sendFile(__dirname+ '/public/Practica1.html')
})
// app.get('/note1', (req,res)=> {
//     nota1 = fs.readFileSync(dirname+ '/tmp/nota1.html')
//     res.send(nota1.toString())
// })
app.get('/notesList', (req,res)=> {
    res.send(notesHTML)
})
app.listen(Port,()=>{
    console.log('Servidor escuchando en puerto', Port)
})
