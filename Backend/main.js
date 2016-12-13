var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes= express.Router();
//var user= require('routes/users');

function configureEndpoints(app) {
    var mongoose=require("./mongoose");
    var pages = require('./pages');
    var api = require('./api');
    var mongo = require('./app');
    //var fs= require('fs');
    mongo.startMongo();
    //app.use(app.router);
    //Налаштування URL за якими буде відповідати сервер
    //Отримання списку піц

    app.get('/api/get-pizza-list/', api.getPeopleList);
    //app.post('/api/create-order/', api.createOrder);

    //Сторінки
    //Головна сторінка
    app.get('/', pages.home);
    //Сторінка замовлення
    app.get('/lots.html', pages.lots);
    app.get('/person.html', pages.person);
    app.get('/profile.html', pages.profile);

    app.get('/users/:userId', function (req,res) {
        mongoose.model('users').find({user:req.params.userId}),
            res.send(users);
    });

    /*
    fs.readdirSync(__dirname + '/models').forEach(function () {
        if(~filename.indexOf('.js')) require(__dirname + '/')
    });

    app.get('/users' ,function (req,res) {
        mongoose.model('users').find(function (err,users) {
            res.send(users);
        })
    })
 */
    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки

    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application is running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;