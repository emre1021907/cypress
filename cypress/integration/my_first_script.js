/// <reference types="cypress" />

it('google test', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type("hava durumu{enter}")
    cy.contains('Görseller').click()
    //cy.get('.gLFy2f',{timeout: 6000}).type("hava durumu{enter}")
    //cy.get('[href="https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx"] > .LC20lb').click()
})

it('login', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('#txtUsername').type("Admin")
    cy.get('#txtPassword').type("admin123")
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2) > a').should('contain', 'Admin')
    cy.get(':nth-child(1) > label').should('contain',"Username")
    cy.get('.toggle').should('have.class', "toggle tiptip")
    cy.get('#frmList_ohrmListComponent').invoke('attr', "id").should('equal', "frmList_ohrmListComponent")
})