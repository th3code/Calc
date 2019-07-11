wys1.addEventListener("mousemove", policz);
szer1.addEventListener("mousemove", policz);
dlugosc1.addEventListener("mousemove", policz);
wys1.addEventListener("change", policz);
szer1.addEventListener("change", policz);
dlugosc1.addEventListener("change", policz);

function policz(){
var wys1 = document.getElementById('wys1').value;
var szer1 = document.getElementById('szer1').value;
var dlugosc1 = document.getElementById('dlugosc1').value;
var wynik = wys1*szer1*dlugosc1;
	var wynik1 = Math.round(wynik * 1000) / 1000;
	wynik=wynik1+" [mm3]";
document.getElementById("wynik").innerHTML=wynik;
document.getElementById("aaa").innerHTML=wys1;
document.getElementById("bbb").innerHTML=szer1;
document.getElementById("ccc").innerHTML=dlugosc1;
}
