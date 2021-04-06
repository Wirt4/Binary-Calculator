"use strict";
document.addEventListener('DOMContentLoaded', init, false);
function init() {
  const calc = new Calculator();


  const one = document.getElementById('btn1');
  const zero = document.getElementById('btn0');
  const c = document.getElementById('btnClr');
  const eq = document.getElementById('btnEql');
  const plus = document.getElementById('btnSum');
  const minus = document.getElementById('btnSub');
  const times = document.getElementById('btnMul');
  const div = document.getElementById('btnDiv');

  one.addEventListener('click', () => calc.setField());
  zero.addEventListener('click', () => calc.setField());
  c.addEventListener('click', () => calc.clearField());
  eq.addEventListener('click', () => calc.setField());
  plus.addEventListener('click', () => calc.setField());
  minus.addEventListener('click', () => calc.setField());
  times.addEventListener('click', () => calc.setField());
  div.addEventListener('click', () => calc.setField());
};

//can't import class from other file, will have it here

export function decimalToBinary(dec) {
  if (dec >= 0 && Math.floor(dec) == dec) {
    let rep = "";
    while (dec > 0) {
      rep += dec % 2;
      dec = Math.floor(dec / 2);
    }
    return Number(rep);
  }
  return -1;
}

export function binaryToDecimal(bin) {
  bin = Number(bin); //to remove leading zeroes
  if (bin >= 0 && Math.floor(bin) == bin) {
    let res = 0;
    let pow = 0;
    while (bin > 0) {
      let place = bin % 10;
      bin = Math.floor(bin / 10);
      res += place * 2 ** pow;
      pow++;
    }
    return res;
  }
  return -1;
}

function setField() {
  document.getElementById('res').innerHTML = "Greetings Program";
}

function clearField() {
  document.getElementById('res').innerHTML = this.display;
}


