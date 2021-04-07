"use strict";

document.addEventListener('DOMContentLoaded', init, false);

function init() {

  var one = document.getElementById('btn1');
  var zero = document.getElementById('btn0');
  var c = document.getElementById('btnClr');
  var eq = document.getElementById('btnEql');
  var plus = document.getElementById('btnSum');
  var minus = document.getElementById('btnSub');
  var times = document.getElementById('btnMul');
  var div = document.getElementById('btnDiv');

  one.addEventListener('click', putOne, true);
  zero.addEventListener('click', putZero, true);
  c.addEventListener('click', clear, true);
  eq.addEventListener('click', setEq, true);
  plus.addEventListener('click', setAdd, true);
  minus.addEventListener('click', message, true);
  times.addEventListener('click', message, true);
  div.addEventListener('click', message, true);


};

let overwrite = false;
let buffer = "";
const opMode = {
  ADDITION: "+",
  SUBTRACTION: "-",
  MULTIPLICATION: "*",
  DIVISION: "/",
};
let mode = opMode.NONE;


function putOne() {
  put("1");
};

function putZero() {
  put("0");
};

function put(digit) {
  if (overwrite) {
    document.getElementById('res').innerHTML = "";
    overwrite = false;
  };
  document.getElementById('res').innerHTML += digit;
};

function message() {
  document.getElementById('res').innerHTML = "hello";
};

function clear() {
  mode = opMode.NONE;
  buffer = "";
  document.getElementById('res').innerHTML = "";
};

function setAdd() {
  buffer = document.getElementById('res').innerHTML;
  mode = opMode.ADDITION;
  overwrite = true;
};

function setEq() {
  const opOne = parseInt(buffer, 2);
  const opTwo = parseInt(document.getElementById('res').innerHTML, 2);
  switch (mode) {
    case opMode.ADDITION:
      let sum = opOne + opTwo;
      document.getElementById('res').innerHTML = sum.toString(2);
    case opMode.SUBTRACTION:
    //stub
    case opMode.MULTIPLICATION:
    //stub
    case opMode.DIVISION:
    //stub
  };
};
//for testing
export { putOne, putZero, setAdd, setEq, clear, message };
