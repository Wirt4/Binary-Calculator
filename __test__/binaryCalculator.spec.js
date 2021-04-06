//remember need to import {function header} from "./scriptsrc";
import {decimalToBinary, binaryToDecimal, bAdd, bSub} from "../js/binaryCalculator";
import {bMul} from "../js/binaryCalculator";
describe("testing decimal to binary", () => {
  test("endow binary number object with 3, expect to get 11", () => {
    expect(decimalToBinary(3)).toEqual(11);
  });
  test("endow binary number object with 2, expect to get 10", () => {
    expect(decimalToBinary(2)).toEqual(10);
  });
  test("zero case", () => {
    expect(decimalToBinary(0)).toEqual(0);
  });

  test("negative input", () => {
    expect(decimalToBinary(-90)).toEqual(-1);
  });
  test("fractions", () => {
    expect(decimalToBinary(Math.PI)).toEqual(-1);
  });

});

describe("testing binary to decimal", () => {
  test("basic conversion from binary to decimal", () => {
    expect(binaryToDecimal(111)).toEqual(7);
    expect(binaryToDecimal('011')).toEqual(3);
  });
  test("bad inputs", () => {
    expect(binaryToDecimal(42)).toEqual(-1);
    expect(binaryToDecimal(Math.PI)).toEqual(-1);
    expect(binaryToDecimal(-1110)).toEqual(-1);
  });
});

describe("testing addition", () => {
  test("basic addition case", () => {
    expect(bAdd(1, 1)).toEqual(10);
  });

  test("2 8s", () => {
    expect(bAdd(100, 100)).toEqual(1000);
  });

  test("slightly more complex", () => {
    expect(bAdd(1010100, 1101)).toEqual(1100001);
  });

});

describe("testing subtraction", () => {
  test("subtraction from itself", () => {
    expect(bSub(1101, 1101)).toEqual(0);
  });

  test("a mildly complicated subtraction", () => {
    expect(bSub(1101000, 1101)).toEqual(1011011);
  });

  test("too large subtraction, output is printed, so graceful fail", () => {
    expect(bSub(1101, 1101000)).toEqual(0);
  });
});

describe("testing multiplication", () => {
  test("3x3 == 9", () => {
    expect(bMul(11, 11)).toEqual(1001);
  });

  test("0x42 == 0", () => {
    expect(bMul(110010, 0)).toEqual(0);
  });

  test("42x54 == 2268", () => {
    expect(bMul(101010, 110110)).toEqual(100011011100);
  });
  test("1x42 == 42", () => {
    expect(bMul(1, 110010)).toEqual(110010);
  });

});

describe("Add value to field", () => {
  test("put binary value of 47 on screen when 1 is clicked", () => {
    document.body.innerHTML = `<div id = 'res' class='resClass'></div> <div id = 'btns'>
    <button id='btn1' class='digitClass'>1</button></div>`;
    const fortySeven = "101111";
    const one= document.getElementById('btn1');
    const screen = document.getElementById('res');
    one.click();
    expect(screen.innerHTML).toBe(fortySeven);
  });
});