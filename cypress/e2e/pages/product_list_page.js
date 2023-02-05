export class ProductListPage{
    productListPage_productTile_product = '[data-image-index=2]'

    filterProductsWithFourStarsAndAboveRating() {
        cy.contains('4 Stars & Up')
            .click()
    }

    selectLanguage(language) {
        cy.contains(language)
            .click() 
    }

    getProductNameByIndex(index) {
       return cy.get(this.productListPage_productTile_product).invoke('text')
    }

    clickProductByIndex(index) {
        cy.get(this.productListPage_productTile_product)
            .click()
    }

}