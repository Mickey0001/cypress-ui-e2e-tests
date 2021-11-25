export class LoginPage {
    
    login() {
        cy.visit('/login')
    
        cy.get('#email').type('mirzasisic57@gmail.com')

        cy.get('#password').type('Te$t1234')

        cy.get('[data-testid=login-button]').click()
    }
}