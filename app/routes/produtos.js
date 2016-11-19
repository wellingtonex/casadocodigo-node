
module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        
        let connection = app.infra.connectionFactory();

        connection.query('select * from livros', (error, results) => {
            console.log(error);
            res.render('produtos/lista',{lista:results});
        });
        connection.end();
        //res.render("produtos/lista");
    });
}