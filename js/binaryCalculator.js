"use strict";

/**
function message() {
  document.getElementById('res').innerHTML = "hello";
};
*/
function putOne() {
  put("1");
  //document.getElementById('res').innerHTML += "1";
};

function putZero() {
  put("0");
  //document.getElementById('res').innerHTML += "0";
};

function clearField() {
  document.getElementById('res').innerHTML = "";
};

function putAdd() {
  put("+");
  //document.getElementById('res').innerHTML += "+";
};

function put(digit) {
  document.getElementById('res').innerHTML += digit;
};

function setEq() {
  const scrn = document.getElementById('res').innerHTML;
  const regex = /(0|1)+/g;
  const found = scrn.match(regex);
  let operand1 = parseInt(found[0],2);
  let operand2 = parseInt(found[1],2);
  let operator =scrn.match(/(\+|-|\*|\/)/g)[0];

  let display = operand1 + operator + operand2;
  let decAns = 0;
  switch(operator){
    case '+':
      decAns = operand1+operand2;
      break;
  }
  document.getElementById('res').innerHTML = decAns.toString(2);
  };

//for testing, remember to toggle
//export { putOne, putZero, setEq, clearField, putAdd};
