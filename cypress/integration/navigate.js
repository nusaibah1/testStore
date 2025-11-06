/// <reference types="cypress"/>
describe("End to end eccomerce test", () => {
    it("Submit Order", () => {
      const productName = "Blackberry"
      cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/");
      cy.get('#username').type('rahulshettyacademy')
      cy.get("#password").type("learning")
      cy.contains('Sign In').click()
      cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)
        cy.get('app-card').filter(':contains("Blackberry")').then($element => {
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button', 'Add').click()
        })
  });
});
