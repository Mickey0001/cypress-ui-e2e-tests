/// <reference types="cypress"/>

import { LoginPage } from "../page-objects/login-page"

describe('change password tests', () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.login()
    })

    it('should successully change the password', () => {

        cy.get('.css-fi6pgk > a').click()

        cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1bjfru0 > .css-1si0dqs').click()

        cy.get('[data-testid=password-change]').type('Te$t1234')

        cy.get('[data-testid=new-password-change]').type('Te$t12345')

        cy.get('[data-testid=confirm-password-change]').type('Te$t12345')

        cy.get('[data-testid=change-password-button]').click()

        cy.get('.css-5ipae5 > .toastify-container').should('contain', 'Password changed successfully.')
    })
})

