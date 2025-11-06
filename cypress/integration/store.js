/// <reference types="cypress"/>
describe("End to end eccomerce test", () => {
  it("Submit Order", () => {
    const productName = "Blackberry";
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/");
    cy.get("#username").type("rahulshettyacademy");
    cy.get("#password").type("learning");
    cy.contains("Sign In").click();
    cy.contains("Shop Name").should("be.visible");
    cy.get("app-card").should("have.length", 4);
    cy.get("app-card")
      .filter(':contains("Blackberry")')
      .then(($element) => {
        cy.wrap($element).should("have.length", 1);
        cy.wrap($element).contains("button", "Add").click();
      });
    cy.get("app-card").eq(0).contains("button", "Add").click();
    cy.contains("a", "Checkout").click();
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        const amount = Number($el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(() => {
        expect(sum).to.be.lessThan(200000);
      });
    cy.contains("button", "Checkout").click();
    cy.get('#country').type('France')
    cy.wait(5000)
    cy.get('.suggestions ul li a').click()
    
    cy.get('.btn-success').click()
    cy.wait(5000)
    cy.get('.alert-success').should('contain', 'Thank you! Your order will be delivered in next few weeks :-)')
  });
});
