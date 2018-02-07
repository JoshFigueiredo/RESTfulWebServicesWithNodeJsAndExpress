var express = require('express'),
    mongoose = require('mongoose');

mongoose.Promise = Promise
    
var dbUrl = 'mongodb://josh:josh@ds225608.mlab.com:25608/restfulwebserviceswithnodejsandexpresspluralsight'

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

mongoose.connect(dbUrl, (err) => {
    console.log('mongo db connection', err)
})

app.listen(port, function(){
    console.log('Gulp is running my app on port ' + port)
})