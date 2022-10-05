const accounData = {
    name: 'user1',
    birthDate: '1990-01-01',
    cpf: '213456',
    email:'email@example.com',
}

describe("Create Accounts Page", () => {
    it('should have title, list accounts button and create account form', () => {
        cy.visit('http://localhost:4173/criar-conta')
        cy.get('header h1').should('have.text', 'Cadastrar nova conta')
        cy.get('header button').should('have.text', 'Ver contas cadastradas')
        cy.get('form').should('exist')
        cy.get('fieldset > div').should('have.length', 4)
        cy.get('fieldset button').should('exist')
    })
    it('should create an account when filling the form correctly', () => {
        cy.intercept('POST', 'http://localhost:3000/accounts', {

        })
        cy.visit('http://localhost:4173/criar-conta')
        cy.get('form fieldset input[name="name"]').type(accounData['name'])
        cy.get('form fieldset input[name="birthDate"]').type(accounData['birthDate'])
        cy.get('form fieldset input[name="cpf"]').type(accounData['cpf'])
        cy.get('form fieldset input[name="email"]').type(accounData['email'])
        cy.get('form fieldset button').click()
        cy.url().should('eq', 'http://localhost:4173/')
    })
});