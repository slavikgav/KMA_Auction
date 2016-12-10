var people_list = require('./data/People_list');

exports.getPeopleList = function(req, res) {
    res.send(people_list);
    console.log("request sent");
};
