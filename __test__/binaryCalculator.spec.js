//remember need to import {function header} from "./scriptsrc";
import {binaryMath, putOne, putZero, putAdd, setEq, clearField, putDiv, putMul, put , putMinus} from "../js/binaryCalculator";
//import {init} from "../js/binaryCalculator";

describe("testing clear method", () => {
  test("clear method", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    expect(scrn.innerHTML).toBe('');
    clearField();
    expect(scrn.innerHTML).toBe('');
    scrn.innerHTML='101010';
    expect(scrn.innerHTML).toBe('101010');
    clearField();
    expect(scrn.innerHTML).toBe('');
  });
});

describe("digit entry", () => {
  test("putting one", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    putOne();
    expect(scrn.innerHTML).toBe('1');
  });
  test("putting multiple ones", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    let i;
    for (i=0; i<8; i++){
      putOne();
    }
    expect(scrn.innerHTML).toBe('11111111');
    clearField();
    expect(scrn.innerHTML).toBe('');
  });

  test("putting zero", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    putZero();
    expect(scrn.innerHTML).toBe('0');
  });

  test("putting addition expression", ()=>{
    document.body.innerHTML = " <div id='res'></div><div>";
      const scrn = document.getElementById('res');
      putOne();
      putZero();
      putAdd();
      putOne();
      putZero();
      expect(scrn.innerHTML).toBe('10+10');

  });
});

describe("divisition tests", ()=>{
  test(" 8 div by two", ()=> {
    document.body.innerHTML = " <div id='res'>1000/10</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('100');
  });

//using -1 as an error code
  test("divide by zero", ()=>{    document.body.innerHTML = "<div id='res'>10/0</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('');
  });

  test("7 div by 3", ()=>{
    document.body.innerHTML = " <div id='res'>111/11</div><div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('10');

  });
test("27 by 3 with key presses", ()=>{
  document.body.innerHTML = "<div id='res'></div>";
  const scrn = document.getElementById('res');
  //enter 27
  putOne();
  putOne();
  putZero();
  putOne();
  putOne();
  expect(scrn.innerHTML).toBe('11011');
  putDiv();
  putOne();
  putOne();
  expect(scrn.innerHTML).toBe('11011/11');
  setEq();
  expect(scrn.innerHTML).toBe('1001');
  putDiv();
  putOne();
  putOne();
  setEq();
  expect(scrn.innerHTML).toBe('11');
});


});
describe(" hitting equality with bad inputs", ()=>{
  test("too many operators", ()=>{
    document.body.innerHTML="<div id='res'>10**10</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('');
  });
  test("no operators", ()=>{
    document.body.innerHTML="<div id='res'>111000</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('111000');
  });
  test(" all zeros", ()=>{
    document.body.innerHTML="<div id='res'>000000</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('0');
  });
  test("leading zeros", ()=>{
    document.body.innerHTML="<div id='res'>0000010</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('10');
  });
});
describe("Addition mimicking button presses as much as possible", () => {
  test("adding two and two ", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    putOne();
    putZero();
    putAdd();
    putOne();
    putZero();
    setEq();
    expect(scrn.innerHTML).toBe('100');
  });

  test("adding 42 and 38 ", () => {
    //101010 + 100110 = 1010000
    
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    //entering binary for 42
    putOne();
    putZero();
    putOne();
    putZero();
    putOne();
    putZero();

    putAdd();
    putOne();
    putZero();
    putZero();
    putOne();
    putOne();
    putZero();
    setEq();
    expect(scrn.innerHTML).toBe('1010000');
  });

});

describe("multiply tests", ()=>{
  test("4 times 9", ()=>{
    document.body.innerHTML="<div id='res'>100*1001</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('100100');

  });
  test("6 times 7 with button presses", ()=>{
    document.body.innerHTML="<div id='res'></div>";
    const scrn = document.getElementById('res');
    putOne();
    putOne();
    putZero();
    putMul();
    putOne();
    putOne();
    putOne();
    setEq();
    expect(scrn.innerHTML).toBe('101010');
  });
});
//idea, have univeral error be a blank screen
//differenates between a "0" which is a valid answer, and that which is undefined
describe("subtraction tests", ()=>{
  test("no such thing as negative numbers", ()=>{
    document.body.innerHTML="<div id='res'>10-100000</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('');
  });
  test("9 minus 6", ()=>{
    document.body.innerHTML="<div id='res'>1001-110</div>";
    const scrn = document.getElementById('res');
    setEq();
    expect(scrn.innerHTML).toBe('11');
  });
  test("10 minus 4 with button clicks", ()=>{
    document.body.innerHTML="<div id='res'></div>";
    const scrn = document.getElementById('res');
    putOne();
    putZero();
    putOne();
    putZero();
    putMinus();
    putOne();
    putZero();
    putZero();
    setEq();
    expect(scrn.innerHTML).toBe('110');
    putMinus();
    putOne();
    putZero();
    setEq();
    expect(scrn.innerHTML).toBe('100');
  });
});

describe("Tests for put() function", ()=>{
  test("stick a zero on a blank screen", ()=>{
    document.body.innerHTML = "<div id='res'></div>";
    const scrn = document.getElementById('res');
    put("0");
    expect(scrn.innerHTML).toBe('0');
  });
  test("append a 1 to a range of zeros", ()=>{
    document.body.innerHTML = "<div id='res'>000</div>";
    const scrn = document.getElementById('res');
    put("1");
    expect(scrn.innerHTML).toBe('0001');
  });
});

describe("Tests for BinaryMath function", ()=>{
  test("addition", ()=>{
    expect(binaryMath('10', '10', '+')).toBe('100');
  });
  test("subtraction", ()=>{
    expect(binaryMath('10', '10', '-')).toBe('0');
    expect(binaryMath('10', '1', '-')).toBe('1');
    expect(binaryMath('1', '10', '-')).toBe('');
  });
  test("division", ()=>{
    expect(binaryMath('11011', '11', '/')).toBe('1001');
    expect(binaryMath('11011', '11011', '/')).toBe('1');
    expect(binaryMath('100', '0', '/')).toBe('');
  });
    test("Multiplication", ()=>{
      expect(binaryMath('11', '11', '*')).toBe('1001');
    });
});