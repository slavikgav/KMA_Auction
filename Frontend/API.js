var API_URL = "http://localhost:5050";

function backendGet(url, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function backendPost(url, user, callback) {
    console.log(user);
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(user),
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

/*
exports.getPeopleList = function(callback) {
    backendGet("/api/getPeopleList/", callback);
};
*/


exports.insertTo = function(order_info, callback) {
    backendPost("/api/insertTo/", order_info, callback);
};

