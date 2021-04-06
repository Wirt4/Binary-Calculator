//remember need to import {function header} from "./scriptsrc";
import {decimalToBinary} from "../js/binaryCalculator";
describe("testing binary number object", () => {
  test("endow binary number object with 3, expect to get '11'", () => {
    expect(decimalToBinary(3)).toEqual(11);
  });
});
