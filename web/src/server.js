var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routing = require('./routing');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routing);

app.listen(port, () => {
    console.log(`Server is up! \n and listening on port ${port}`);
});