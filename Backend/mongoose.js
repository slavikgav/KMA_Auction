var mongoose=require('mongoose');

function mongooseStart() {
    mongoose.connect("mongodb://localhost/AuctionDB");
    var LotSchema = new mongoose.Schema({
        name : String,
        gender : String,
        description: String,
        comments : [String],
        cuurentBid : Number,
        isBidden : Boolean, // if lot is bought status = true,else false
        bump_date : Date,
        image :  { data: Buffer, contentType: String }
    });

    var ProfileScheme = new mongoose.Schema({
        name : String,
        gender : String,
        favouriteBids : [LotSchema], // User's favourites bids , but not bought yet.
        bids : [LotSchema],
        img : { data: Buffer, contentType: String }
    });

    var db= mongoose.connection;

    db.on('error',function (err) {
        console.log("connection error","ekkee"+err.message);
    });
    db.once('open',function callback() {
        console.log("connectd to DB!");
    });

    var Lot=mongoose.model('Lot',LotSchema);

    var Profile=mongoose.model('Profile',ProfileScheme);

    var Slava=new Profile({
        name : "Slava",
        gender : "Male",
        favouriteBids : [], // User's favourites bids , but not bought yet.
        bids : [],
        img : { data: null, contentType: null }
    });
}

exports.mongooseStart = mongooseStart;