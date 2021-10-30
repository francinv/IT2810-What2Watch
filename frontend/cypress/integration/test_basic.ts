it("just for testing", () => {
    cy.visit("https://google.com");
    cy.get('[name="q"]')
    .type("test")
    .type("{enter}");
});