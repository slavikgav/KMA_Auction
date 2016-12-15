var userList = [];
var $list = $('#list');
var fs;
var ejs;
$(function () {

    var fs = require('fs');
    var ejs = require('ejs');
    var API = require ('js/API')
        API.getUsersList(function (err, data) {
            if (err) {
                userList = [];
            } else {
                userList = data;
                console.log(userList);
                showUsersList(userList);
            }
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




