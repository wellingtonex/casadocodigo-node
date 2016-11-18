let mysql = require('mysql');
module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', (error, result) => {
            console.log(error);
            res.send(result);
        });
        connection.end();
        //res.render("produtos/lista");
    });
}