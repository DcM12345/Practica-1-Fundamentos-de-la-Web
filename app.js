const express = require("express")
const app= express();
const Port= 3000
app.use(express.static('public'));
app.get('/', (req,res)=> {
    res.sendFile(__dirname+ '/public/Practica1.html')


})
app.listen(Port,()=>{
    console.log('Servidor escuchando en puerto', 3000)
})