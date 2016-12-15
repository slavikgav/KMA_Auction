var userList = [];
var $list = $('#list');

var fs = require('fs');
var ejs = require('ejs');
var API = require ('./API');
var Templates = require('../../src/Templates.js') ;
$(function () {
    console.log('i main')
        API.getUsersList(function (err, data) {
            if (err) {
                userList = [];
                console.log('no t')
            } else {
                userList = data;
                console.log(userList);
                showUsersList(userList);
            }
        });

});

function showUsersList(userList) {
    alert("ls");
    $list.html("");
    function showOne(item) {
        var html_code = Templates.Lot_OneItem();
        var $node = $(html_code);
        $list.append($node);
    }
    userList.results.forEach(showOne);
}

/*
unction showUsersList() {
    console.log("Update cart inside");
    //Очищаємо старі лоти в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOne(cart_item) {
        var html_code = Templates.Lot_OneItem(cart_item);
        var $node = $(html_code);

        $cart.append($node);
    }

    Cart.forEach(showOne);

}


*/

