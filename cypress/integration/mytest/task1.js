describe('Task1-test', () => {
    it('with Mocha Framework', () => {

        cy.visit('https://www.demoblaze.com/')
        cy.get("#tbodyid > div:nth-child(7) > div > div > h4 > a").scrollIntoView().should('be.visible').click() // scroll
        cy.get("a[class='btn btn-success btn-lg']").click()
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Product added');
        })

        // firing window: alert event with on() method--Cypress shall trigger the window:confirm event with the help of the on() method and then capture the text on the alert ( which can be later verified with assertion) but the whole incident shall not be visible on screen.
        cy.on('window:confirm', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('ok');
        })

        cy.get('a#cartur').click() // click on cart
        cy.get('#tbodyid > tr > td:nth-child(2)').should('have.text', 'HTC One M9') //availability of HTC One M9 in the cart 
        cy.get('#tbodyid > tr > td:nth-child(3)').should('have.text', '700') //amount of the product
        cy.get('#page-wrapper > div > div.col-lg-1 > button').click() // click on place order
        //enter all input details
        cy.get('input#name').type('mat')
        cy.get('input#country').type('US')
        cy.get('input#city').type('cal')
        cy.get('input#card').type('9865456789')
        cy.get('input#month').type('june')
      
        cy.get('input#year').type('2000')

        // click on purchase

        cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click()

        //validate message
        cy.get('body > div.sweet-alert.showSweetAlert.visible > h2').should('have.text','Thank you for your purchase!')
        // click on ok
        cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click()


        
    })



})