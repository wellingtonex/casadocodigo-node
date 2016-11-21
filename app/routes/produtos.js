
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
        res.render('produtos/form',{errosValidacao:[], produto:{}});
    });

    app.post('/produtos', (req, res) => {
        let produto = req.body;

         req.assert('titulo', 'Titulo é obrigatório.').notEmpty();
         req.assert('preco', 'Formato inválido.').isFloat();

        let erros = req.validationErrors();

        if(erros) {
            res.format({
                html: () => {                    
                    res.status(400).render('produtos/form', {errosValidacao:erros, produto:produto});
                },
                json: () => {
                    res.status(400).json(erros);
                }
            })
            return;
        } else {
            let connection = app.infra.connectionFactory();
            let produtoDAO = new app.infra.ProdutoDAO(connection);
            produtoDAO.salva(produto, (error, resultados) => {
                res.redirect('/produtos');
            }) 
        }

    });
}