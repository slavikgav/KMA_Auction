var API_URL = "http://localhost:6060";

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

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

exports.getPeopleList = function(callback) {
    backendGet("/api/getPeopleList/", callback);
};

/*

exports.createOrder = function(order_info, callback) {
    backendPost("/api/create-order/", order_info, callback);
};

*/