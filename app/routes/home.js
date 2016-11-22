module.exports = (app) => {
    app.get('/', (req, res) => {
        let connection = app.infra.connectionFactory();
        let produtoDAO = new app.infra.ProdutoDAO(connection);

        produtoDAO.lista((error, resultados) => {
            res.render('home/index', {livros:resultados});
        });
        connection.end();
    });
}