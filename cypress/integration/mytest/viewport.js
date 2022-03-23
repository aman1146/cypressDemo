describe('testing diff viewports', () => {

    before(() => {

        console.log('running my test')
    })

    beforeEach(() => {

        cy.visit('https://www.google.com')

    })

    it('open in macbook 13', () => {

        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in macbook 15', () => {

        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-8', () => {

        cy.viewport('iphone-8')
        cy.screenshot()
        cy.wait(200)
        cy.wait(800)
    })





})