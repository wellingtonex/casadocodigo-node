let mysql = require('mysql');
module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', (error, results) => {
            console.log(error);
            res.render('produtos/lista',{lista:results});
        });
        connection.end();
        //res.render("produtos/lista");
    });
}