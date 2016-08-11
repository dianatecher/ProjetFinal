'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const db = mongojs('itemlist', ['itemlist']);

const path = `${__dirname}/dist/public`;
const viewsPath = `${path}/views`;

const routes = require('./routes/index');
const users = require('./routes/users');

const app = express();

// uncomment after placing your favicon in /public
app.use(favicon(`${path}/favicon.ico`));//cf. line 11
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path));

app.use('/', routes);
app.use('/users', users);


//READ
app.get('/itemlist', function (req, res){
    console.log("I received a GET request")
    db.itemlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

//CREATE
app.post('/itemlist', function (req, res){
    req.body.item0 = new Date();
    console.log("EDWIN "+ req.body);//it won't work without body-parser
    db.itemlist.insert(req.body, function(err,doc) {
        res.json(doc);
    })
});


//DELETE
app.delete('/itemlist/:id', function(req, res){
    var id = req.params.id;
    console.log('removed id : '+id);
    db.itemlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
        res.json(doc);
    })
});



//UPDATE
//edit
app.get('/itemlist/:id', function(req, res){
    var id = req.params.id;
    db.itemlist.findOne({_id: mongojs.ObjectId(id)}, function(err,doc){
        res.json(doc);
    })
});


app.put('/itemlist/:id', function(req, res) {
    var id = req.params.id;
    //console.log(req.body.item1);// item1 will pe printed in the console
    //console.log(req.body.item2);// item2 will pe printed in the console
    //console.log(req.body.item3);// item3 will pe printed in the console

    db.itemlist.findAndModify({ query: {_id: mongojs.ObjectId(id)},
        update: {$set: {item1: req.body.item1, item2: req.body.item2, item3: req.body.item3, item4: new Date()}},
        new: false}, function (err, doc){
            res.json(doc);
    })
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.sendFile(`${viewsPath}/example.html`);
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
});


module.exports = app;
