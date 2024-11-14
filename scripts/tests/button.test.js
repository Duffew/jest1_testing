/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    // now identify the element we want to test
    document.body.innerHTML = "<p id='par'></p>";
});

// now create the test
describe("DOM tests", () => {
    test("expects p content to change", () => {
        // call the buttonClick() to click automatically
        buttonClick()
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});