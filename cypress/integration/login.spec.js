/// <reference types="cypress"/>

import { LoginPage } from "../page-objects/login-page"

describe('login tests', () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.login()
    })

    it('should log sucessfully with valid credentials', () => {

        cy.url().should('contain', '/events')
    })
})

