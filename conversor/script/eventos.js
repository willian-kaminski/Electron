function converter(){

  var polegadas = document.getElementById("valor_polegadas").value;
  var centimetros = document.getElementById("teste");

  centimetros.innerHTML = polegadas * 2.54 + " Cm";

}
