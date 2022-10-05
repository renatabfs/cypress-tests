describe("Create Accounts Page", () => {
    it('should have title, list accounts button and create account form', () => {
        cy.visit('http://localhost:4173/criar-conta')
        cy.get('header h1').should('have.text', 'Cadastrar nova conta')
        cy.get('header button').should('have.text', 'Ver contas cadastradas')
        cy.get('form').should('exist')
        cy.get('fieldset > div').should('have.length', 4)
        cy.get('fieldset button').should('exist')
    })
});