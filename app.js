var app = require('./config/express')();

app.get('/produtos',(req,res) => {
    console.log('listando...');
    res.render("produtos/lista");
});

app.listen(3000, () => {
    console.log("servidor rodando");
});