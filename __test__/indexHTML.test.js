const { renderDOM } = require("./helpers");

let dom;
let document;

describe("index.html", () => {
  beforeEach(async () => {
    dom = await renderDOM("./index.html");
    document = await dom.window.document;
  });

  it("has a header tag with a nav, ul, 3 li's ", () => {
    // Arrange
    const header = document.querySelector("header");
    const nav = document.querySelector(".pageNav");
    const ul = document.querySelector(".pageNav ul");
    const lis = document.querySelectorAll(".navLink");
    // Act
    // Assert
    expect(header).not.toBeNull();
    expect(nav).not.toBeNull();
    expect(ul).not.toBeNull();
    expect(lis).not.toBeNull();
    expect(lis.length).toBe(3);

  });

  it("has a main class with div.gameChoice and 2 button", () => {
    const main = document.querySelector(".container");
    const div = document.querySelector(".gameChoice");
    const button = document.querySelectorAll("button");


    expect(main).not.toBeNull();
    expect(div).not.toBeNull();
    expect(button).not.toBeNull();
    expect(button.length).toBe(2);

  });


  it("When button clicked it renders a new page", () => {
    console.log("WINDOW TEST!");
    const button = document.querySelectorAll("button");
    const anchor = document.querySelector(".gameChoice button a");

    const ticButton = button[0];
    const expectedUrl = "./tic-tac-toe.html";

    // delete dom.window.location;
    // dom.window.location = { href: expectedUrl };

    ticButton.click();

    expect(anchor.getAttribute("href")).toBe(expectedUrl);
    // expect(dom.window.location.href).toBe("");
    // PATH/hackathon/index.html I want PATH/hackathon/tic-tac-toe.html
  })

});