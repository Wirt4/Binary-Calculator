"use strict";

document.addEventListener('DOMContentLoaded', init, false);

function init(){
 
  const calc = new Calculator();
  var one = document.getElementById('btn1');
  var zero = document.getElementById('btn0');
  var c = document.getElementById('btnClr');
  var eq = document.getElementById('btnEql');
  var plus = document.getElementById('btnSum');
  var minus = document.getElementById('btnSub');
  var times = document.getElementById('btnMul');
  var div = document.getElementById('btnDiv');

  one.addEventListener('click', calc.putOne, true);
  zero.addEventListener('click', calc.putZero, true);
  c.addEventListener('click', calc.clear, true);
  eq.addEventListener('click', calc.setEq, true);
  plus.addEventListener('click', calc.setAdd, true);
  minus.addEventListener('click', calc.message, true);
  times.addEventListener('click', calc.message, true);
  div.addEventListener('click', calc.message, true);

};

//turn export ON for unit testing and OFF for user testing
//have to hard code the document element ids for some reason
class Calculator{
  
  constructor(){
    this.overwrite = false;
    this.buffer="";
    this.opMode = {
      ADDITION: "+",
      SUBTRACTION: "-",
      MULTIPLICATION: "*",
      DIVISION: "/",
    }
    this.mode =this.opMode.NONE;
  }
  
  putOne(){
   this.put("1");
  }

  putZero(){
    this.put("0");
  }

  put(digit){
    if (this.overwrite){
      document.getElementById('res').innerHTML= "";
      this.overwrite = false;
    }
    document.getElementById('res').innerHTML += digit;
  }

  message () {
    document.getElementById('res').innerHTML= "hello";
  }

  clear(){
    this.mode = this.opMode.NONE;
    this.buffer="";
    document.getElementById('res').innerHTML= "";
  }

  setAdd(){
    this.buffer = document.getElementById('res').innerHTML;
    this.mode = this.opMode.ADDITION;
    this.overwrite = true;
  }

  setEq(){
    const opOne = parseInt(this.buffer, 2);
    const opTwo = parseInt(document.getElementById('res').innerHTML, 2);
    switch (this.mode) {
      case this.opMode.ADDITION:
        let sum = opOne + opTwo;
        document.getElementById('res').innerHTML = sum.toString(2);
      case this.opMode.SUBTRACTION:
      //stub
      case this.opMode.MULTIPLICATION:
      //stub
      case this.opMode.DIVISION:
      //stub
    }
  }
}