var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://josh:josh@ds225608.mlab.com:25608/restfulwebserviceswithnodejsandexpresspluralsight');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res) {
        var responseJson = {hello: "This is my api"};

        res.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('welcom to my api');
})

app.listen(port, function(){
    console.log('Gulp is running my app on port ' + port)
})