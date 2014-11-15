function btctousd(btc){
    var theUrl = "https://api.bitfinex.com/v1/pubticker/btcusd"
    var responseText = httpGet(theUrl);
    return responseText;
/*
setInterval(function(){
      // method to be executed;
    },5000);
*/
}
function httpGet(theUrl)
{
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, true ); // I tried with true and with false
    xmlHttp.send();
    var answer= xmlHttp.responseText;
    var str = JSON.stringify(answer);
    console.log(str);
    var jsonResponse = JSON.parse(str);
    console.log(jsonResponse);
}
/*function httpGet(theUrl){
  $.getJSON(theUrl, function(data)
  {
      $.each(data, function()
      {
          console.log(this['title']);
      })
  });
}*/
