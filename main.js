function krediHesapla() {
  var cekilecekTutar, vadeSayisi;
  var aylikTaksit, odenecekToplamTutar;




  cekilecekTutar = document.getElementById("girilenKredi").value;
  var liste = document.getElementById("listeVade");
  vadeSayisi = liste.options[liste.selectedIndex].value;

  odenecekToplamTutar = cekilecekTutar * 1.1;

  aylikTaksit = odenecekToplamTutar / vadeSayisi;

odenecekToplamTutar = odenecekToplamTutar.toFixed(2);
aylikTaksit = aylikTaksit.toFixed(2);

document.getElementById("Sonuç").innerHTML = "Geri ödenecek toplam tutar: " + odenecekToplamTutar + " TL" + '<br>' + "Aylık taksit tutarı: " + aylikTaksit + " TL";


}
