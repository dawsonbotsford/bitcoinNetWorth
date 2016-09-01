function getBitcoin(){
  var feedback = $.ajax({
    type: "GET",
    url: "https://api.bitcoinaverage.com/ticker/USD/"
  }).success(function(data){
    if (currentBitcoin < data.last){
      document.getElementById("netUsdField").style.color = "#009933";
    }else if (currentBitcoin > data.last){
      document.getElementById("netUsdField").style.color = "#FF6666";
    }

    currentBitcoin = data.last;
    //var current_usd = Math.floor(netBitcoin * currentBitcoin * 100)/100;
    var current_usd = (netBitcoin * currentBitcoin).toFixed(2);
    $("h2").html("1 BTC = $" + currentBitcoin);
    $("#netUsdField").html("$" + current_usd);
    document.title = "Worth: $" + current_usd;

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
      callback((data[0].total.balance * .00000001));
    }
  });
}
