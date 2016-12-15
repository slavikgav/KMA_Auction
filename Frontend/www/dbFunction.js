/**
 * Created by yaroslav on 14.12.2016.
 */


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("addLotBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addToDB() {

    var uname = document.getElementById('profile_name').innerHTML;
    var usocId = document.getElementById('profile_Id').innerHTML;
    var uimage=document.getElementById('photoUrl').value;
    var ugender = document.getElementById('profile_gender').innerHTML;
    var desk = document.getElementById('desc').value;

    if(uimage =="" || desk==""){
        alert("Empty field")
    }else{

    console.log(uname, usocId, uimage, ugender);

var Yara = {
    name: uname,
    socialNetworkId: usocId,
    gender: ugender,
    favouriteBids: [], // User's favourites bids , but not bought yet.
    bids: [],
    imgSrc: uimage
};
//var data = "&data="+encodeURI(Yara);
$.post("/api/insertTo/", Yara, function (res) {
    if (res.success) {
        console.log('Yara sent');
    }

    else {
        alert("Failed to insert")
    }
})
;
    }
}
