var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name : String,
    gender : String,
    favouriteBids : [LotSchema], // User's favourites bids , but not bought yet.
    bids : [LotSchema],
    img : { data: Buffer, contentType: String }
});

mongoose.model('users',usersSchema);

/*
router.post('/profile',function (req,res) {
    var newuser= new User();
    newuser.name=response.name;
    newuser.gender=response.gender;
    newuser.favouriteBids=response.favouriteBids;
    newuser.bids=response.bids;
    newuser.save(function (err,savedUser) {
        if(err) {
            console.log(err)
            return res.status(500).send();
        }
        return res.status(200).send();
    })
}) */