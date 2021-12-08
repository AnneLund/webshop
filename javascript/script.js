// Jeg starter med at deklarere en variabel (let). Jeg tildeler den en key/identifyer (products) Navnet på min key skal stemme overens med værdien. Den skal starte på nul.

let products = 0;

// Min button har en onclick-function som jeg har kaldt functionAdd. I funktionen har jeg brugt en assignment/tildelingsoperator (+=) som tildeler en værdi (1) til min variabel (products). For hver gang min function starter, altså hver gang jeg klikker på knappen, lægger den 1 til min værdi.

function functionAdd() {
  products += 1;
  document.getElementById("items").innerHTML = products;
}

//I funktionen functionRemove har jeg brugt en assignment/tildelingsoperator (-=) som tildeler en værdi (-1) til min variabel (products). For hver gang min function starter, altså hver gang jeg klikker på knappen, trækker den 1 fra min værdi.

function functionRemove() {
  products -= 1;
  document.getElementById("items").innerHTML = products;

  //For at undgå at værdien til min variabel går i minus, bruger jeg en condition der fortæller, at hvis products er mindre end 1, skal den lægge 1 til. På den måde kan jeg ikke komme længere ned end 0.
  if (products < 1) return (products = +1);
}

//Når der klikkes på indkøbsvognen, starter funktionen der er knyttet til id'et myBtn.
document.getElementById("myBtn").onclick = function () {
  myFunction();
};

//Funktionen skifter (toggle) imellem at vise og skjule indholdet (show)

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
