"use strict";
//verbose, but makes for easier clickl listens in html
function putMinus(){
  put("-");
};

function putDiv(){
  put("/");
};

function putMul(){
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
  const regex = /(0|1)+/g;
  const found = scrn.match(regex);
  let operand1 = parseInt(found[0],2);
  let operand2 = parseInt(found[1],2);
  let operator =scrn.match(/(\+|-|\*|\/)/g)[0];

  let decAns = "";
  switch(operator){
    case '/':
      if (operand2>0){
        decAns = Math.floor(operand1/operand2);
      }
    break;
    case '+':
      decAns = operand1+operand2;
      break;
    case '*':
      decAns = operand1 * operand2;
      break;
    case '-':
      if(operand1>=operand2){
        decAns = operand1-operand2;
      }
    default:
      break;
  }
  document.getElementById('res').innerHTML = decAns.toString(2);
  };

//for testing, remember to toggle
export { putOne, putZero, setEq, clearField, putAdd, putDiv, putMul, put, putMinus};
