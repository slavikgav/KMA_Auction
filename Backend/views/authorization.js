
/**
 * FAcebook script
 * */

    // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log("WE are connected");
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}
// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}
window.fbAsyncInit = function () {
    FB.init({
        appId: '547022722158282',
        cookie: true,  // enable cookies to allow the server to access
                       // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
    });
    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.
    /**
     *    comment getLoginStatus to login very time you are on page
     * */
    /*  FB.getLoginStatus(function (response) {
     statusChangeCallback(response);
     });*/
    /* FB.Event.subscribe('auth.login', function(resp) {
     window.location = 'http://localhost:6163/profile.html';
     });*/
};
// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,email,gender,permissions', function (response) {
        if(response && !response.error) {

            router.post('/profile',function (req,res) {
                var newuser = new User();
                newuser.name = response.name;
                newuser.gender = response.gender;
                newuser.favouriteBids = response.favouriteBids;
                newuser.bids = response.bids;
                newuser.save(function (err, savedUser) {
                    if (err) {
                        console.log(err)
                        return res.status(500).send();
                    }
                    return res.status(200).send();
                })
            });
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name+", email = "+ response.email+", gender = "+response.gender+",id= https://www.facebook.com/"+response.id;
            console.log('Successful login for: ' + response.id);
            console.log('Successful login for: ' + response.email);
            document.getElementById("profileImage").setAttribute("src", "http://graph.facebook.com/" + response.id + "/picture?type=normal");
            document.getElementById("profileImage1").setAttribute("src", "http://graph.facebook.com/" + response.id + "/picture?type=normal");
        }
    });
}



/**
 *
 * Vk script
 */
var im ;
VK.init({
    apiId: 5768708
});
function authInfo(response) {
    if (response.session) {
        //alert('user: '+response.session.mid);
        getInitData();
    }
}
function getInitData() {
    var code;
    code = 'return {'
    code += 'me: API.getProfiles({uids: API.getVariable({key: 1280}),  fields: "sex,photo"})[0]';
    code += '};';
    VK.Api.call('execute', { 'code': code }, onGetInitData);
}
function onGetInitData(data) {
    var r;
    if (data.response) {
        r = data.response;
        if (r.me) {
            document.getElementById('image').src = r.me.photo;
            var gender;
            if(r.me.sex == 0){
                gender="undefined"
            }else if(r.me.sex == 1){
                gender = "female";
            }else gender = "male";
            document.getElementById('name').innerHTML = "Name = "+r.me.first_name + ' ' + r.me.last_name + ", id = "+r.me.uid+" gender "+gender;
            console.log(r.me.first_name + ' ' + r.me.last_name + '<br><a href="http://vkontakte.ru/id' + r.me.uid + '">  ' + r.me.photo + "  " + r.me.gender);
        }
    }
}
// VK.Auth.getLoginStatus(authInfo);
VK.UI.button('vk_login_button');
