//remember need to import {function header} from "./scriptsrc";
import {Calculator} from "../js/binaryCalculator";
//import {init} from "../js/binaryCalculator";
describe("when message is called, the screen reads 'hello' ", () => {
  test("altering screen", () => {
    const calc = new Calculator('res');
    document.body.innerHTML = " <div id='res'></div>";
    const scrn = document.getElementById('res');
    expect(scrn.innerHTML).toBe('');
    calc.message();
    expect(scrn.innerHTML).toBe('hello');
  });
});

describe("testing clear method, then clear method called by button press ", () => {
  test("clear method", () => {
    const calc = new Calculator();
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    expect(scrn.innerHTML).toBe('');
    calc.clear();
    expect(scrn.innerHTML).toBe('');
    scrn.innerHTML='101010';
    expect(scrn.innerHTML).toBe('101010');
    calc.clear();
    expect(scrn.innerHTML).toBe('');
  });
});

describe("digit entry", () => {
  test("putting one", () => {
    const calc = new Calculator();
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    calc.putOne();
    expect(scrn.innerHTML).toBe('1');
  });
  test("putting multiple ones", () => {
    const calc = new Calculator();
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    let i;
    for (i=0; i<8; i++){
      calc.putOne();
    }
    expect(scrn.innerHTML).toBe('11111111');
    calc.clear();
    expect(scrn.innerHTML).toBe('');
  });

  test("putting zero", () => {
    const calc = new Calculator();
    document.body.innerHTML = " <div id='res'></div><div>";
    const scrn = document.getElementById('res');
    calc.putZero();
    expect(scrn.innerHTML).toBe('0');
  });
});