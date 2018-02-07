var express = require('express'),
    mongoose = require('mongoose');

var ip_add = 'localhost'
var db = mongoose.connect('mongodb://' + ip_add + '/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res) {
        Book.find(function(err,books){
            if (err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('welcom to my api');
})

app.listen(port, function(){
    console.log('Gulp is running my app on port ' + port)
})