var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var router = express.Router();

console.log('——————————- Run on port ' + port);

/****************************** Router ***************************/
router.get('/api', function (req, res) {

    // res.sendFile('./public/index.html');
    res.send('api');
});
router.get('*', function (req, res) {

    // res.sendFile('./public/index.html');
    // res.sendFile('index.html', { root: path.join(__dirname, '/') });
    res.sendFile('index.html', { root: __dirname + '/' });
});

/****************************** /Router ***************************/
// app.use(morgan('dev')); // log every request to the console
// app.use(express.static(__dirname + '/dist')); // Static (public) folder
app.use(express.static(__dirname)); // Static (public) folder

app.use(bodyParser.urlencoded({ extended: true }));// get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/', router); // app.use('/parent', router); call all from localhost:port/parent/*

app.listen(port);