/// <reference types="cypress"/>

import { HomePage } from "../page-objects/home-page"

describe('login tests', () => {

    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit('/')
    })

    it('should register a new account', () => {

        cy.get('.css-o6pyxp').click()

        cy.get('[data-testid=email-signup]').type('test' + Math.random() + '@getnada.com')

        cy.get('[data-testid=name-signup]').type('Test User') 

        cy.get('[data-testid=password-signup]').type('Te$t1234')

        cy.get('[data-testid=confirm-password-signup]').type('Te$t1234')

        cy.get('[data-testid=phone-number-signup]').type('+123')

        cy.get('.css-2vmmyj').click()

        cy.get('[data-testid=signup-button]').click()

        cy.get('[data-testid=registration-code-mfa]').type('9999')

        cy.get('[data-testid=pba-signup-button]').click()

        cy.get('.css-1czsflu').click()

        cy.url().should('contain', '/events')
    })
})

