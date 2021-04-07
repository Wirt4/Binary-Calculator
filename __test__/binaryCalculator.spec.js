//remember need to import {function header} from "./scriptsrc";
import {message} from "../js/binaryCalculator";

describe("when message is called, the screen reads 'hello' ", () => {
  test("pressing a button", () => {
    document.body.innerHTML = " <div id='res'></div>";
    const scrn = document.getElementById('res');
    expect(scrn.innerHTML).toBe('');
    message();
    expect(scrn.innerHTML).toBe('hello');

  });
});