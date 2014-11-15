function get_btc(){
    var feedback = $.ajax({
        type: "GET",
        url: "https://api.bitcoinaverage.com/ticker/USD/"
    }).success(function(data){
        $("h2").html("$" + data.last);
    });

}

function get_wallet_balance(pub_key, callback){
    var api_key_id = 'a6482aa55ab1ae6fbb8bd12b46ccd80d';
    var addr = pub_key;
    var url = 'https://api.chain.com/v2/bitcoin/addresses/' + addr;
    $.ajax({
      url: url,
      data: {'api-key-id': api_key_id},
      type: 'GET',
      success: function(data) {
        console.log(data);
        $("h1").append((data[0].total.balance)  * .00000001 + " BTC"); 
        callback(data[0].total.balance);
      }
    });
}
