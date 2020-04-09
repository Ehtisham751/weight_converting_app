document.getElementById("lbsInput").addEventListener("input", function (e) {
  document.getElementById("position").style.transform = "translate3d(0,0,0)";
  document.getElementById("position1").style.transform = "translate3d(0,0,0)";
  document.getElementById("position2").style.transform = "translate3d(0,0,0)";
  document.getElementById("position3").style.transform = "translate3d(0,0,0)";
  document.getElementById("position4").style.transform = "translate3d(0,0,0)";
  let pounds = e.target.value;

  var select = document.getElementById("activitySel");

  if (select.value === "pounds") {
    document.getElementById("change").innerHTML = "Gram :";
    document.getElementById("change1").innerHTML = "Kilograms :";
    document.getElementById("change2").innerHTML = "Ounce :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
    //
    document.getElementById("gramsOutput").innerHTML = pounds * 454;
    document.getElementById("kgOutput").innerHTML = pounds / 2.205;
    document.getElementById("ozOutput").innerHTML = pounds * 16;
    document.getElementById("tnOutput").innerHTML = pounds / 2205;
    document.getElementById("stOutput").innerHTML = pounds / 14;
  }
  if (select.value === "grams") {
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Kilogram :";
    document.getElementById("change2").innerHTML = "Ounce :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
    document.getElementById("gramsOutput").innerHTML = pounds / 454;
    document.getElementById("kgOutput").innerHTML = pounds / 1000;
    document.getElementById("ozOutput").innerHTML = pounds / 28.35;
    document.getElementById("tnOutput").innerHTML = pounds / 1e6;
    document.getElementById("stOutput").innerHTML = pounds / 6350;
  }
  if (select.value === "kilograms") {
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Ounce :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
    //
    document.getElementById("gramsOutput").innerHTML = pounds * 2.205;
    document.getElementById("kgOutput").innerHTML = pounds * 1000;
    document.getElementById("ozOutput").innerHTML = pounds * 35.274;
    document.getElementById("tnOutput").innerHTML = pounds / 1000;

    document.getElementById("stOutput").innerHTML = pounds / 6.35;
  }
  if (select.value === "ounces") {
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Kilogram :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";

    document.getElementById("gramsOutput").innerHTML = pounds / 16;
    document.getElementById("kgOutput").innerHTML = pounds * 28.35;
    document.getElementById("ozOutput").innerHTML = pounds / 35.274;
    document.getElementById("tnOutput").innerHTML = pounds / 35274;
    document.getElementById("stOutput").innerHTML = pounds / 224;
  }
  if (select.value === "tonne") {
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Kilogram :";
    document.getElementById("change3").innerHTML = "Ounce :";
    document.getElementById("change4").innerHTML = "Stone :";

    document.getElementById("gramsOutput").innerHTML = pounds * 2205;
    document.getElementById("kgOutput").innerHTML = pounds * 1e6;
    document.getElementById("ozOutput").innerHTML = pounds * 1000;
    document.getElementById("tnOutput").innerHTML = pounds * 35274;
    document.getElementById("stOutput").innerHTML = pounds * 157.473;
  }
  if (select.value === "stone") {
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Kilogram :";
    document.getElementById("change3").innerHTML = "Ounce :";
    document.getElementById("change4").innerHTML = "Tonne :";

    document.getElementById("gramsOutput").innerHTML = pounds * 14;
    document.getElementById("kgOutput").innerHTML = pounds * 6350;
    document.getElementById("ozOutput").innerHTML = pounds * 6.35;
    document.getElementById("tnOutput").innerHTML = pounds * 224;
    document.getElementById("stOutput").innerHTML = pounds / 157;
  }
});
var select = document.getElementById("activitySel");
select.addEventListener("change", function () {
  var input = document.getElementById("lbsInput");
  input.value = "null";
  //
  //
  if (select.value === "pounds") {
    input.placeholder = "Pound...";
    // Name Changing
    document.getElementById("gramsOutput").innerHTML = 0;
    document.getElementById("kgOutput").innerHTML = 0;
    document.getElementById("ozOutput").innerHTML = 0;
    document.getElementById("tnOutput").innerHTML = 0;
    document.getElementById("stOutput").innerHTML = 0;
    //
    document.getElementById("change").innerHTML = "Gram :";
    document.getElementById("change1").innerHTML = "Kilograms :";
    document.getElementById("change2").innerHTML = "Ounce :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
  }
  //
  //
  if (select.value === "grams") {
    input.placeholder = "Gram...";
    // Name changing
    document.getElementById("gramsOutput").innerHTML = 0;
    document.getElementById("kgOutput").innerHTML = 0;
    document.getElementById("ozOutput").innerHTML = 0;
    document.getElementById("tnOutput").innerHTML = 0;
    document.getElementById("stOutput").innerHTML = 0;
    //
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Kilogram :";
    document.getElementById("change2").innerHTML = "Ounce :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
  }
  //
  //
  if (select.value === "kilograms") {
    input.placeholder = "Kilogram...";
    // name changing
    document.getElementById("gramsOutput").innerHTML = 0;
    document.getElementById("kgOutput").innerHTML = 0;
    document.getElementById("ozOutput").innerHTML = 0;
    document.getElementById("tnOutput").innerHTML = 0;
    document.getElementById("stOutput").innerHTML = 0;
    //
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Ounce :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
  }
  //
  //
  if (select.value === "ounces") {
    input.placeholder = "Ounce...";
    // Names Changing
    document.getElementById("gramsOutput").innerHTML = 0;
    document.getElementById("kgOutput").innerHTML = 0;
    document.getElementById("ozOutput").innerHTML = 0;
    document.getElementById("tnOutput").innerHTML = 0;
    document.getElementById("stOutput").innerHTML = 0;
    //
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Kilogram :";
    document.getElementById("change3").innerHTML = "Tonne :";
    document.getElementById("change4").innerHTML = "Stone :";
  }
  //
  //
  if (select.value === "tonne") {
    input.placeholder = "Tonne...";
    // NAmes changing
    document.getElementById("gramsOutput").innerHTML = 0;
    document.getElementById("kgOutput").innerHTML = 0;
    document.getElementById("ozOutput").innerHTML = 0;
    document.getElementById("tnOutput").innerHTML = 0;
    document.getElementById("stOutput").innerHTML = 0;
    //
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Kilogram :";
    document.getElementById("change3").innerHTML = "Ounce :";
    document.getElementById("change4").innerHTML = "Stone :";
  }
  //
  //
  if (select.value === "stone") {
    input.placeholder = "Stone...";
    // NAmes Changing
    document.getElementById("gramsOutput").innerHTML = 0;
    document.getElementById("kgOutput").innerHTML = 0;
    document.getElementById("ozOutput").innerHTML = 0;
    document.getElementById("tnOutput").innerHTML = 0;
    document.getElementById("stOutput").innerHTML = 0;
    //
    document.getElementById("change").innerHTML = "Pound :";
    document.getElementById("change1").innerHTML = "Gram :";
    document.getElementById("change2").innerHTML = "Kilogram :";
    document.getElementById("change3").innerHTML = "Ounce :";
    document.getElementById("change4").innerHTML = "Tonne :";
  }
});
