//remember need to import {function header} from "./scriptsrc";
import {putOne, putZero, setAdd, setEq, clear, message} from "../js/binaryCalculator";
//import {init} from "../js/binaryCalculator";
describe("when message is called, the screen reads 'hello' ", () => {
  test("altering screen", () => {
    document.body.innerHTML = " <div id='res'></div>";
    const scrn = document.getElementById('res');
    expect(scrn.innerHTML).toBe('');
    message();
    expect(scrn.innerHTML).toBe('hello');
  });
});

describe("testing clear method, then clear method called by button press ", () => {
  test("clear method", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    expect(scrn.innerHTML).toBe('');
    clear();
    expect(scrn.innerHTML).toBe('');
    scrn.innerHTML='101010';
    expect(scrn.innerHTML).toBe('101010');
    clear();
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
    clear();
    expect(scrn.innerHTML).toBe('');
  });

  test("putting zero", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    putZero();
    expect(scrn.innerHTML).toBe('0');
  });
});

describe("Addition mimicking button presses as much as possible", () => {
  test("adding two and two ", () => {
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    putOne();
    putZero();
    setAdd();
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

    setAdd();
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