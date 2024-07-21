const { renderDOM } = require("./helpers");

let dom;
let document;

xdescribe("tic-tac-toe.html", () => {
  beforeEach(async () => {
    dom = await renderDOM("./tic-tac-toe.html");
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

  it("has a main div.contentWrapper and 2 button", () => {
    const main = document.querySelector(".container");
    const div = document.querySelector(".contentWrapper");
    const player1 = document.querySelector(".playerOne");
    const player2 = document.querySelector(".playerTwo");
    const h1 = document.querySelector("h1");

    const section = document.querySelector(".ticTacToeContainer");

    console.log("R", section);

    expect(main).not.toBeNull();
    expect(div).not.toBeNull();
    expect(h1.textContent).toBe("Tic Tac Toe");
    expect(player1.textContent).toBe("Player 1");
    expect(player2.textContent).toBe("Player 2");

    expect(section.innerHTML.trim()).toBe('<article class="btn-main"><div class="box"></div><div class="box"></div><div class="box"></div></article><article class="btn-main"><div class="box"></div><div class="box"></div><div class="box"></div></article><article class="btn-main"><div class="box"></div><div class="box"></div><div class="box"></div></article>');

  });


  it("Building the board.", () => {
    // Arrange
    const section = document.querySelector(".ticTacToeContainer");
    const divHolder = [];
    
    const articles = section.querySelectorAll("article");

    articles.forEach(article => {
      const divs = Array.from(article.querySelectorAll("div"));
      divHolder.push(divs);      
    });


    expect(divHolder.length).toBe(3);
    divHolder.forEach(row => {
        expect(row.length).toBe(3);
    });

  });

  xit("X and O are displayed when a box is clicked", () => {
    // Arrange
    const section = document.querySelector(".ticTacToeContainer");
    const divHolder = [];
    
    const articles = section.querySelectorAll("article");

    articles.forEach(article => {
      const divs = Array.from(article.querySelectorAll("div"));
      divHolder.push(divs);      
    });


    // Mock the event handler
    const handleGameClick = jest.fn();


    // Add event listeners to each div
    divHolder.forEach((row, rowIndex) => {
      row.forEach((div, colIndex) => {
        div.addEventListener("click", (e) => handleGameClick(e, rowIndex, colIndex));
      });
    });

    const firstDiv = divHolder[0][0];
    const clickEvent = new Event('click', { bubbles: true, cancelable: true });
    firstDiv.dispatchEvent(clickEvent);

    // Assert
    expect(handleGameClick).toHaveBeenCalledTimes(1);
    expect(handleGameClick).toHaveBeenCalledWith(expect.any(Event), 0, 0);
    
    
  })


});