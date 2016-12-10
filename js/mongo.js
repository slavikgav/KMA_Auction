
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
    img : { data: Buffer, contentType: String },
});
