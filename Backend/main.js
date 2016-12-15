var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = express.Router();
//var user= require('routes/users');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');
    var mongo = require('./api');
    //var fs= require('fs');
    mongo.startMongo();
    //app.use(app.router);
    //Налаштування URL за якими буде відповідати сервер

    app.get('/api/getUsersList/', api.getUsersList);
    app.post('/api/insertTo/', api.insertTo);


    //Сторінки
    //Головна сторінка
    app.get('/', pages.home);
    //Сторінка замовлення
    app.get('/lots.html', pages.lots);
    app.get('/person.html', pages.person);
    app.get('/profile.html', pages.profile);

    app.get('/person/:user', function (req, res) {
        api.getUser(req.params.id,function (req,res) {
            if (res) {
                console.log(" SUCCCCCCESSS");
               res.send({
                    user: user
                });
            }
            else {
                console.log("NOOOOOOOOOOT SUCCCCCCESSS");
              res.send({
                    success: false
                })
            }
        });

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
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки

    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application is running on http://localhost:' + port + '/');
    });
}

exports.startServer = startServer;