var redColor1 = "255"
var greenColor1 ="255"
var blueColor1= "255"

function showcolor(){

var redColor = document.getElementById("redColor").value
var greenColor = document.getElementById("greenColor").value
var blueColor = document.getElementById("blueColor").value

if (redColor1=="255" & greenColor1=="255" & blueColor1=="255") {
document.getElementById("color1").style.backgroundColor = 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')'
redColor1 = redColor
greenColor1 = greenColor
blueColor1 = blueColor
}
else {
document.getElementById("color2").style.backgroundColor = 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')'
}
}

function colorme(){
  document.getElementById("color3").style.backgroundColor =document.getElementById("color1").style.backgroundColor
}

function colorme1(){
  document.getElementById("color3").style.backgroundColor =document.getElementById("color2").style.backgroundColor
}