describe('url test', () => {
    it.only('app test', () =>{

        cy.visit('https://www.google.com/')
        cy.contains('Business')
        cy.contains('Business').click()
        cy.url().should('include', '/business')
        cy.wait(2000)
        cy.wait(4000)
      // test only
      //checking branch
    
    })



})