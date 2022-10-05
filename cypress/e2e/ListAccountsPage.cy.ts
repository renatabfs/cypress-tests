describe ("List Accounts Page", () => {

it ('should have title, create account button and table', () => {
    cy.intercept('GET', 'http://localhost:3000/accounts', {fixture: 'accounts.json'})
    cy.visit('http://localhost:4173/')
    cy.get('header h1').should('have.text', 'Lista de contas')
    cy.get('header button').should('have.text', 'criar conta')
    cy.get('table').should('exist')
    cy.get('table thead tr th').should('have.length', 5)
    cy.get('table thead tr th:nth-child(1)').should('have.text', 'ID')
    cy.get('table thead tr th:nth-child(2)').should('have.text', 'Nome')
    cy.get('table thead tr th:nth-child(3)').should('have.text', 'Data de nascimento')
    cy.get('table thead tr th:nth-child(4)').should('have.text', 'e-mail')
    cy.get('table thead tr th:nth-child(5)').should('have.text', 'CPF')
})
})