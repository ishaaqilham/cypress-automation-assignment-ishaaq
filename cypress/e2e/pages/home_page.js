export class HomePage{
    homePage_dropdown_category = '#searchDropdownBox'
    homePage_textbox_search = '#twotabsearchtextbox'

    loadHomePageUrl() {
        cy.visit('https://www.amazon.com/')
        cy.url()
        .should('include', 'https://www.amazon.com/')
    }

    selectCategoryWithKeyword(categoryName) {
        cy.get(this.homePage_dropdown_category)
            .select(categoryName, { force: true })
    }

    enterSearchText(searchKeyword) {
        cy.get(this.homePage_textbox_search)
            .type(searchKeyword)
            .type('{enter}')
    }

}