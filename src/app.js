window.onload = function() {
  let Sujeto = [
    "El kioskero ",
    "Un marciano ",
    "El perro ",
    "Una abuela ",
    "Un Ovni ",
    "Un taxista ",
    "Un Uruk - hai ",
    "El maestro Yoda "
  ];
  let Verbo = [
    "se comió ",
    "se llevó ",
    "me robó ",
    "me quemó ",
    "me destrozó ",
    "me quitó "
  ];
  let Objeto = [
    "mis deberes ",
    "mi proyecto de JavaScript ",
    "mi coche ",
    "mis ganas de trabajar ",
    "mi gato ",
    "mi comida ",
    "mi sable láser ",
    "el anillo Único "
  ];
  let Cuando = [
    "hace un momento.",
    "ayer.",
    "hace una semana.",
    "con la primera luz del quinto día, al alba, cuando miraba al este.",
    "mientras dormía.",
    "cuando venía de camino.",
    "cuando no miraba."
  ];
  let rdm1 = Math.floor(Math.random() * Sujeto.length);
  let rdm2 = Math.floor(Math.random() * Verbo.length);
  let rdm3 = Math.floor(Math.random() * Objeto.length);
  let rdm4 = Math.floor(Math.random() * Cuando.length);
  document.querySelector("#excusa").innerHTML =
    Sujeto[rdm1] + Verbo[rdm2] + Objeto[rdm3] + Cuando[rdm4];
};
