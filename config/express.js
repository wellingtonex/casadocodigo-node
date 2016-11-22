let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
module.exports = () => {

    let app = express();

    app.use(express.static('./app/public'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd:'app'})
        .then('infra')
        .into(app);

    return app;
}
