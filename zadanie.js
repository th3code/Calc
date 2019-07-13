a1.addEventListener("change", policz);
f1.addEventListener("change", policz);
f2.addEventListener("change", policz);
d.addEventListener("change", policz);
e.addEventListener("change", policz);
f.addEventListener("change", policz);
g.addEventListener("change", policz);


function policz(){
	
var a1 = document.getElementById('a1').value;
var f1 = document.getElementById('f1').value;
var f2 = document.getElementById('f2').value;
var d = document.getElementById('d').value;
var e = document.getElementById('e').value;
var f = document.getElementById('f').value;
var g = document.getElementById('g').value;

var ed = (3.14 *(1.75/2) * (1.75/2))/e;
var c = d-f-ed;
var a2 = a1-f-g;

var wiersz1="G1   E"+a1+"  F"+f1;
var wiersz2="G1   E"+a2+"  F"+f2;
var wiersz3="G92 E"+c+"  F"+f1;


document.getElementById("w1").innerHTML=wiersz1;
document.getElementById("w2").innerHTML=wiersz2;
document.getElementById("w3").innerHTML=wiersz3;
}

