describe('url test', () => {
    it('app test', () =>{

        cy.visit('https://www.google.com/')
        cy.contains('Business')
        cy.contains('Business').click()
        cy.url().should('include', '/business')
        cy.wait(2000)
      // test only
      //checking branch
    
    })



})