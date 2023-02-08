export class ProductListPage{
    productListPage_productTile_product = '[data-image-index=num]'
    productListPage_label_productName = '.a-size-medium*'

    filterProductsWithFourStarsAndAboveRating() {
        cy.contains('4 Stars & Up')
            .click()
    }

    selectLanguage(language) {
        cy.contains(language)
            .click() 
    }

    getProductNameByIndex(index) {
       return cy.get(this.productListPage_label_productName.indexOf(index)).invoke('text')
    }

    clickProductByIndex(index) {
        cy.get(this.productListPage_productTile_product.replace('num',index))
            .click()
    }

}