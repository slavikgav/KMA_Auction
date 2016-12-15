(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var userList = [];
var $list = $('#list');
var fs;
var ejs;
$(function () {

    var kek = require('fs');
    /*require(['fs'], function (foo) {
        fs=foo;
    });*/

    require(['js/ejs'], function (foo) {
        ejs=foo;
    });

    require(['js/API.js'], function (foo) {
        foo.getUsersList(function (err, data) {
            if (err) {
                userList = [];
            } else {
                userList = data;
                console.log(userList);
                showUsersList(userList);
            }
        });
    });

});

function showUsersList(userList) {
    $list.html("");
    for (var i = 0; i < userList.length; i++) {
        var html_code = ejs.compile(fs.readFileSync('./Frontend/templates/Lot_OneItem.ejs', "utf8"));
        var $node = $(html_code);
        $list.append($node);
    }
}





},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
