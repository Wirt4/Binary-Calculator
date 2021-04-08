"use strict";

function putMinus() {
  put("-");
};

function putDiv() {
  put("/");
};

function putMul() {
  put("*");
}

function putOne() {
  put("1");
};

function putZero() {
  put("0");
};

function putAdd() {
  put("+");
};

function put(digit) {
  document.getElementById('res').innerHTML += digit;
};

function clearField() {
  document.getElementById('res').innerHTML = "";
};

function setEq() {
  const scrn = document.getElementById('res').innerHTML;
  const valRgx = /^[01]+[+-\/*][01]+$/g;
  const valNum = /^[10]*$/g;
  const oopsAllZeros = /^0+$/g;
  if (valRgx.test(scrn)) {
    const parseRgx = /([01])+/g;
    const found = scrn.match(parseRgx);
    let operator = scrn.match(/[+-\/*]/g)[0];
    document.getElementById('res').innerHTML = binaryMath(found[0], found[1], operator);
  }else if(oopsAllZeros.test(scrn)){
    document.getElementById('res').innerHTML = "0";
  } else if (valNum.test(scrn)) {
    const num = parseInt(scrn);
    document.getElementById('res').innerHTML = num.toString(10);
  }else{
    document.getElementById('res').innerHTML = "";
  };
};
//takes in two strings and an operator and returns the result
function binaryMath(bin1, bin2, op) {
  let dec1 = parseInt(bin1, 2);
  let dec2 = parseInt(bin2, 2);
  if ((op == '-' && dec2 > dec1) || op == '/' && dec2 == 0) return '';
  return Math.floor(eval(dec1 + op + dec2)).toString(2);
};



//for testing, remember to toggle
//export { putOne, putZero, setEq, clearField, putAdd, putDiv, putMul, put, putMinus, binaryMath };
