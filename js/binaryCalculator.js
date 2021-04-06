"use strict";

document.addEventListener('DOMContentLoaded', init, false);
function init(){
  function message () {
    alert("Hello!");
  }
  var one = document.getElementById('btn1');
  var zero = document.getElementById('btn0');
  var c = document.getElementById('btnClr');
  var eq = document.getElementById('btnEql');
  var plus = document.getElementById('btnSum');
  var minus = document.getElementById('btnSub');
  var times = document.getElementById('btnMul');
  var div = document.getElementById('btnDiv');

  one.addEventListener('click', message, true);
  zero.addEventListener('click', message, true);
  c.addEventListener('click', message, true);
  eq.addEventListener('click', message, true);
  plus.addEventListener('click', message, true);
  minus.addEventListener('click', message, true);
  times.addEventListener('click', message, true);
  div.addEventListener('click', message, true);
};