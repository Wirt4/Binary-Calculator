"use strict";
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  var calc = new Calculator();


  var one = document.getElementById('btn1');
  var zero = document.getElementById('btn0');
  var c = document.getElementById('btnClr');
  var eq = document.getElementById('btnEql');
  var plus = document.getElementById('btnSum');
  var minus = document.getElementById('btnSub');
  var times = document.getElementById('btnMul');
  var div = document.getElementById('btnDiv');

  one.addEventListener('click', calc.setField, true);
  zero.addEventListener('click', calc.setField, true);
  c.addEventListener('click', calc.clearField, true);
  eq.addEventListener('click', calc.setField, true);
  plus.addEventListener('click', calc.setField, true);
  minus.addEventListener('click', calc.setField, true);
  times.addEventListener('click', calc.setField, true);
  div.addEventListener('click', calc.setField, true);
};

//can't import class from other file, will have it here

class Calculator{
  
  setField() {
    document.getElementById('res').innerHTML = "Greetings Program";
  }

  clearField(){
    document.getElementById('res').innerHTML = "";
    }
};

