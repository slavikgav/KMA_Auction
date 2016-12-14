/**
 * Created by yaroslav on 14.12.2016.
 */

var API = require("../API");
var Templates = require('./Templates');
var Lot_List = require('./Lot_List');

// Змінна де будуть зберігтаися всі лоти
var Cart=[];

var $cart = $('#cart');


function addToCart(lot){

    Cart.push({
    lot: lot
    });

    updateCart();

}

function updateCart() {

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOneLotInCart(cart_item) {
        var html_code = Templates.Lot_OneItem(cart_item);
        var $node = $(html_code);


        $cart.append($node);
    }

    Cart.forEach(showOneLotInCart);

}
/**
 *    ТУТ ЗЧИТУЄМО З БД
 */
function initialiseCart() {


   /* Cart = JSON.parse(localStorage.getItem("data"));
    if(Cart==null)Cart=[];*/
   Cart = Lot_List.lots;

   updateCart();
}

exports.addToCart = addToCart;
exports.initialiseCart = initialiseCart;

