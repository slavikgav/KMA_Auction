/**
 * Created by yaroslav on 14.12.2016.
 */
var fs = require('fs');
var ejs = require('ejs');

exports.Lot_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Lot_OneItem.ejs', "utf8"));