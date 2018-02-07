var express = require('express'),
    mongoose = require('mongoose');
    bodyParser = require('body-parser')

var ip_add = 'localhost'
var db = mongoose.connect('mongodb://' + ip_add + '/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function(req, res){
    res.send('welcom to my api');
})

app.listen(port, function(){
    console.log('Gulp is running my app on port ' + port)
})