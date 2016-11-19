function ProdutoDAO(connection) {
    this._connection = connection;
}

ProdutoDAO.prototype.lista = function(callback) {
    this._connection.query('select * from livros', callback);
}

ProdutoDAO.prototype.salva = function(produto, callback) {
    this._connection.query('insert into livros set ?', produto, callback);
}

module.exports = function() {
    return ProdutoDAO
}