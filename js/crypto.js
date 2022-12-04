window.onload = function(){
    doAjax();
}

function doAjax(){
    var xmlHttp = new XMLHttpRequest();
    var url = "http://fs1.co.il/bus/bitcoin.php";
    xmlHttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log(JSON.parse(this.response));
            var coinsArr = JSON.parse(this.response);
            createAllCoins(coinsArr)
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send();

}

function createAllCoins(_coinsArr){
    for(var i = 0 ; i < _coinsArr.length; i++){
        var item = _coinsArr[i];
        var newCryptoCoin = new Crypto(id_parent,item.name,item.id,item.price_usd);
            newCryptoCoin.addToHTML()
    }
}