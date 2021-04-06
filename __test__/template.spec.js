//remember need to import {function header} from "./scriptsrc";
import {decimalToBinary, binaryToDecimal} from "../js/binaryCalculator";
describe("testing decimal to binary", () => {
  test("endow binary number object with 3, expect to get 11", () => {
    expect(decimalToBinary(3)).toEqual(11);
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
