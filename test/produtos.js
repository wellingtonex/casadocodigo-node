let http = require('http');
describe('#ProdutosController', () => {
    it('#listagem json', (done) => {

        var configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(configuracoes, (res) => {
            if(res.statusCode === 200) {
                console.log('status ok');
                
            }
            console.log(res.headers['content-type']);
            
            if(res.headers['content-type'] === 'application/json; charset=utf-8') {
                console.log('content-type ok');
            }
            done();
        });

        

    });
});