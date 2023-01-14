export default describe("user input", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("renders", () => {
    cy.get("input");
    cy.get("[data-cy='submit-btn']");
  });
  it("enters correct number", () => {
    cy.get("input").type("12345678900");
    cy.get("[data-cy='submit-btn']").click();
    cy.get("[data-cy='popup-text'").should(
      "have.text",
      "Il numero è stato aggiunto con successo!"
    );
  });
  it("enters wrong number", () => {
    cy.get("input").type("non sono un numerooo");
    cy.get("[data-cy='submit-btn']").click();
    cy.get("[data-cy='popup-text'").should(
      "have.text",
      "Il numero non può essere aggiunto alla lista. Forse hai sbagliato qualcosa?"
    );
  });
  it("enters correctable number", () => {
    cy.get("input").type("123abc45678900");
    cy.get("form").submit();
    cy.get("[data-cy='popup-text'").should(
      "contain.text",
      "C'è stato un problema con la sintassi, ma ora è tutto ok"
    );
  });
});

describe("table", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("renders", () => {
    cy.get(".table");
  });
  it("finds correct column and correct num", () => {
    cy.get(".correct-column");
    cy.get("[data-cy='correct-num']");
  });
  it("finds incorrect column and incorrect num", () => {
    cy.get(".incorrect-column");
    cy.get("[data-cy='incorrect-num']");
  });
  it("finds corrected column and corrected num", () => {
    cy.get(".corrected-column");
    cy.get("[data-cy='corrected-num']");
  });
});
