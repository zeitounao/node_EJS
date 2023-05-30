
const express = require('express');
const app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
    const items = [
        {
            titulo: "E",
            mensagem: "liezer é"
        },
        {
            titulo: "L",
            mensagem: "igeiro"
        },
        {
            titulo: "I",
            mensagem: "nteligente"
        },
    ];

    const subtitulo = "usamos uma linguagem de modelagem"
    res.render("telas/index", {
        qualidades: items,
        subtitulo: subtitulo,
    });
})
app.get("/sobre", function(req, res){
    res.render("telas/about");
})

app.listen(8080);
console.log("rodando");
