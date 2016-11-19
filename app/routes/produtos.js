
module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        
        let connection = app.infra.connectionFactory();
        let produtoDAO = new app.infra.ProdutoDAO(connection);

        produtoDAO.lista((error, resultados) => {
            res.render('produtos/lista',{lista:resultados});
        });
        connection.end();
    });
}