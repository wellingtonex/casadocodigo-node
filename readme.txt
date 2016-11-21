npm init
npm install express --sava

http://www.embeddedjs.com/
http://nodemon.io/

npm install mysql --save

npm install express-load --save

npm install body-parser --save


https://www.caelum.com.br/apostila-vraptor-hibernate/

https://www.caelum.com.br/apostila-vraptor-hibernate/rest/#11-1-o-que-e-rest

ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
}

npm install express-validator --save

