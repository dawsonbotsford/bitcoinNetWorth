function get_btc(){
    var feedback = $.ajax({
        type: "GET",
        url: "https://api.bitcoinaverage.com/ticker/USD/"
    }).success(function(data){
        $("h2").html("$" + data.last);
        setTimeout(function(){get_btc();}, 20000);
    }).responseText;

}
function get_wallet_balance(pub_key){


}
