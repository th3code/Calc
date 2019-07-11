wys.addEventListener("change", policz);
szer.addEventListener("change", policz);
dlugosc.addEventListener("change", policz);

function policz(){
var wys = document.getElementById('wys').value;
var szer = document.getElementById('szer').value;
var dlugosc = document.getElementById('dlugosc').value;
var wynik = wys*szer*dlugosc;
	var wynik1 = Math.round(wynik * 1000) / 1000;
	wynik=wynik1+" [mm3]";
document.getElementById("wynik").innerHTML=wynik;
}
