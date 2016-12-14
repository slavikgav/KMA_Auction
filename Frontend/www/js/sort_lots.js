/**
 * Created by yaroslav on 14.12.2016.
 */

function sortLots() {

    var time_select = document.getElementById('time_select');
    var price_select = document.getElementById('price_select');
    var name_select = document.getElementById('name_select');
    var gender_select = document.getElementById('gender_select');

    var e=time_select;
    var option_value = e.options[e.selectedIndex].value;
    console.log(option_value);

    obj.sort(comparePrice);
    obj.toString();

}

function comparePrice(a,b) {
    if (a.price < b.price)
        return -1;
    if (a.price > b.price)
        return 1;
    return 0;
}

function compareNamesAscending(a,b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
function compareNamesDescending(a,b) {
    if (a.name > b.name)
        return -1;
    if (a.name < b.name)
        return 1;
    return 0;
}


function compareGenderMale(a,b) {
    if (a.gender == "Male")
        return 1;
    if (b.gender == "Female")
        return -1;
    return 0;
}

function compareGenderFemale(a,b) {
    if (a.gender == "Female")
        return 1;
    if (b.gender == "Male")
        return -1;
    return 0;
}
