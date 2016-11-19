module.exports = () => {
    this.lista = (connection, callback) => {
        connection.query('select * from livros', callback);
    }
    return this;
}