let app = require('express')();
app.set('view engine','ejs');
module.exports = () => {
    return app;
}


