let express = require('../config/express')();
let request = require('supertest')(express);
let assert = require('assert');
describe('#ProdutosController', () => {
    it('#listagem json', (done) => {

        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done());

    });

    it('#cadastro de novos produtos com produto com dados invalidos', (done) => {
        request.post('/produtos')
        .send({titulo:'', descricao:'novo livro'})
        .expect(400, done);
    });

    it('#cadastro de novos produtos com produto com dados validos', (done) => {
        request.post('/produtos')
        .send({titulo:'titulo novo produto', descricao:'descricao novo livro', preco:10.50})
        .expect(302, done);
    });
});