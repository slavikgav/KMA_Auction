var fs = require('fs');
var ejs = require('ejs');
var readFileSync = require('fs-file-sync-fd').readFileSync;


exports.Lot_OneItem = window.ejs.compile(fs.readFileSync('./Frontend/templates/lot.ejs', "utf8"));
