let http = require('http');
var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path:'/produtos',
    method:'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json',
    }
};

client = http.request(configuracoes, (res) => {
    console.log(res.statusCode);
    res.on('data', (body) => {
        console.log('Corpo: ' + body);        
    })
});

let produto = {
    titulo:'',
    descricao:'nome, javascript e um pouco de http',
    preco:50
}

client.end(JSON.stringify(produto));