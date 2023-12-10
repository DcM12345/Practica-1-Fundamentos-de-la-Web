const { publicDecrypt } = require("crypto");
const express = require("express")
const app= express();
const Port= 3456
app.use(express.static('styles'));
app.use(express.static('public'))
app.get('/', (req,res)=> {
    res.sendFile(__dirname+ '/public/Practica1.html')
})
app.listen(Port,()=>{
    console.log('Servidor escuchando en puerto', Port)
})