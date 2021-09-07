var express = require ('express');
var app = express();

//utilizando o template ejs
app.set('view engine', 'ejs');

app.get('/home', function(req, res) {
    res.render("../viwes/home");

});

app.get('/', function (req, res) {
    res.json({name: "Margleysson", idade: 36});
});

// Parametros - instalando o nodemon
app.get('/form/:nome/:sobrenome?', function(req, res){
    res.send('<h1>' + req.params.nome + ' ' + req.params.sobrenome + '<h1>');
});

// Query Params
app.get('/query', function (req, res) {
    let name = req.query['nome'];
    if (name) {
        res.send('<h1>' + name + '</h1>');
    } else{
        res.send('<h1>Nenhum nomr foi passado!</h1>');
    }
});

app.listen(3000, function (){
    console.log ("Executando na porta 3000!");
});