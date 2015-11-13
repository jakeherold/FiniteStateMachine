var coin = false;
var gateOpens = false;
var imageSpot = document.getElementById("imageSpot");

function getCoin(){
  document.getElementById("textArea").innerHTML = "you pulled a coin from your pocket!";
  imageSpot.src = "images/coinPocket.jpg";
  coin = true;
}

function depositCoin(){
  if (coin === true){
    gateOpens = true;
    coin = false;
    document.getElementById("textArea").innerHTML = "You put a coin in the machine. The gate is open!";
    imageSpot.src = "images/turnstile.jpg";
  } else {
    document.getElementById("textArea").innerHTML = "You don't have a coin. Get one from your pocket!";
  }
}

function getOnTrain(){
  if (gateOpens === true){
    document.getElementById("textArea").innerHTML = "You get on board the train!";
    imageSpot.src = "images/happyTrain.jpg";
  } else {
    document.getElementById("textArea").innerHTML = "put a coin in first!";
  }

}

