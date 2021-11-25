
/// <reference types="cypress"/>

import { LoginPage } from "../page-objects/login-page"

describe('edit account tests', () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.login()
    })

    it('should allow editing of the account info', () => {

        cy.get('.css-fi6pgk > a').click()

        cy.get('[href="/settings/account-information"] > .css-zhqoyt > .css-1bjfru0 > .css-1si0dqs').click()

        cy.get('#name').clear().type('New Name')

        cy.get('#address').clear().type('New Address')

        cy.get('[data-testid=account-information-button]').click()

        cy.get('.Toastify__toast-body > .css-5ipae5').should('contain', 'Account information saved successfully.')
    })
})

