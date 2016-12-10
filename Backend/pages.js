exports.home = function(req, res) {
    res.render('home', {
        pageTitle: 'Auctioooon'
    });
};

exports.person = function(req, res) {
    res.render('person',{
        pageTitle:'Person'
    });
};

exports.lots = function(req, res) {
    res.render('lots',{
        pageTitle:'lots'
    });
};