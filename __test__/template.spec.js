//remember need to import {function header} from "./scriptsrc";
import {decimalToBinary, binaryToDecimal, bAdd, bSub} from "../js/binaryCalculator";
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