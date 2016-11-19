
module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        
        let connection = app.infra.connectionFactory();
        let produtoDAO = app.infra.produtoDAO;

        produtoDAO.lista(connection, (error, resultados) => {
            res.render('produtos/lista',{lista:resultados});
        });
        connection.end();
    });
}