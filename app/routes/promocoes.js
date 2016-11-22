module.exports = (app) => {
    app.get('/promocoes/form', (req, res) => {
        console.log('passou aqui');
        
        let connection = app.infra.connectionFactory();
        let produtoDAO = new app.infra.ProdutoDAO(connection);

        produtoDAO.lista((error, resultados) => {
            res.render('promocoes/form', {livros:resultados});
        });
        connection.end();
    });

    app.post('/promocoes', (req, res) => {
        let promocao = req.body;
        console.log(promocao);
        res.redirect('promocoes/form');        
    } );
}