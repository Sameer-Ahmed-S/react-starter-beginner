import Greeting from "../../src/Greeting";

describe("Greeting Component", () => {
  it("renders with correct props", () => {
    const props = {
      age: 25,
      occupation: "developer",
    };

    cy.mount(<Greeting {...props} />);

    cy.contains(
      "Hello Jasbir Thanks Babel :) is 25 old and works as developer"
    ).should("exist");
  });
});
