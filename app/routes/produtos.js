
module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        
        let connection = app.infra.connectionFactory();
        let produtoDAO = new app.infra.ProdutoDAO(connection);

        produtoDAO.lista((error, resultados) => {
            res.format({
                html: () => {
                    res.render('produtos/lista',{lista:resultados});
                },
                json: () => {
                    res.json(resultados);
                }
            })
        });
        connection.end();
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos', (req, res) => {
        let produto = req.body;
        let connection = app.infra.connectionFactory();
        let produtoDAO = new app.infra.ProdutoDAO(connection);
        produtoDAO.salva(produto, (error, resultados) => {
            res.redirect('/produtos');
        }) 
    });
}