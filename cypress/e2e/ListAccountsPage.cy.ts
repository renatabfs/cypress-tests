describe("List Accounts Page", () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3000/accounts', {
            fixture: 'accounts.json',
        });
    });

    it('should have title, create account button and table', () => {
        cy.visit('http://localhost:3000/')
        cy.get('header h1').should('have.text', 'Lista de contas - GQSO')
        cy.get('button').should('have.text', 'criar conta')
        cy.get('table').should('exist')
        cy.get('table thead tr th').should('have.length', 5)
        cy.get('table thead tr th:nth-child(1)').should('have.text', 'ID')
        cy.get('table thead tr th:nth-child(2)').should('have.text', 'Nome')
        cy.get('table thead tr th:nth-child(3)').should('have.text', 'Data de nascimento')
        cy.get('table thead tr th:nth-child(4)').should('have.text', 'e-mail')
        cy.get('table thead tr th:nth-child(5)').should('have.text', 'CPF')
    })

    it('should\'t list accounts when fetch fals', () => {
        cy.intercept('GET', 'http://localhost:3000/accounts', {
           statusCode: 400,  
        });
        cy.visit('http://localhost:5173/')
        cy.get ('table tbody tr').should('have.length', 0)
    })
    it('should redirect to create accunts page when  click on header button', () => {
        cy.visit('http://localhost:5173/')
        cy.get('header button').click();
        cy.url().should('include', 'http://localhost:5173/criar-conta')
    })
})