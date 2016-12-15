var fs = require('fs');
var ejs = require('ejs');

exports.Lot_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/lot.ejs', "utf8"));
