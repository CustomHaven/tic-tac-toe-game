const { renderDOM } = require("./helpers");

let dom;
let document;

describe("index.html", () => {
  beforeEach(async () => {
    dom = await renderDOM("./index.html");
    document = await dom.window.document;
  });

  it("has a header tag", () => {
    // Arrange
    const header = document.querySelector("header");
    // Act
    // Assert
    expect(header).not.toBeNull();
  });

});