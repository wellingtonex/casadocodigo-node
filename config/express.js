let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');
module.exports = () => {

    let app = express();

    app.use(bodyParser.urlencoded({extended:true}));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd:'app'})
        .then('infra')
        .into(app);

    return app;
}
