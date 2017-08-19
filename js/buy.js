// Pedro Monteiro / Beyond Nebula 2017

var buy = {

  base_price : 44.72,

  prices : {
    pt: {tax: 10.28, shipping: 5.6},
    eu: {tax: 10.28, shipping: 9.9},
    non_eu: {tax: 0, shipping: 9.9},
    world: {tax: 0, shipping: 17.1}
  },

  onchange : function(){
    var region = $("#region_selection option:selected")[0].value;

    var total_price = buy.base_price + buy.prices[region]['tax'] +
      buy.prices[region]['shipping']

    // Set labels
    $("#label_price")[0].innerHTML = buy.base_price;
    $("#label_tax")[0].innerHTML = buy.prices[region]['tax'];
    $("#label_shipping")[0].innerHTML = buy.prices[region]['shipping'];
    $("#label_total")[0].innerHTML = total_price;

    // Set PayPal data
    $('input[name="amount"]')[0].value = buy.base_price;
    $('input[name="tax"]')[0].value = buy.prices[region]['tax'];
    $('input[name="shipping"]')[0].value = buy.prices[region]['shipping'];

  },

  init : function() {
    $("#region_selection").change(buy.onchange);
    buy.onchange();
  }

}

document.addEventListener('DOMContentLoaded', buy.init);
