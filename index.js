const express = require("express"); // importando o express
const app = express(); //iniciando o express

app.get("/", function(req, res){
    res.send("Bem vindo ao site");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})

app.get("/canal/youtube", function(req, res){

    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido");
    }
    
})

app.get("/ola/:nome?", function(req, res){
    var nome = req.params.nome
    if(nome){
        res.send("Ola, tudo bem " + nome + " ?")
    } 
    else{
        res.send("ola, tudo bem?");
    }
})


app.listen(8080, function(erro){
    if(erro) {
        console.log("Ocorreu um erro na aplicacao");
    }
    console.log("Servidor iniciado com sucesso");
})