export class ProductDetailPage{
    productDetailsPage_label_productTitle = '#productTitle'
    productDetailsPage_label_product_unitPrice = '#price'
    productDetailsPage_dropdown_quantity = '#a-autoid-0-announce'
    productDetailsPage_option_quantity = '#quantity_1'
    productDetailsPage_button_AddToCart = '#add-to-cart-button'
    productDetailsPage_button_goToCart = '#sw-gtc > .a-button-inner > .a-button-text'

    getProductTitleAndValidate(expectedTitle) {
        var productTitle = cy.get(this.productDetailsPage_label_productTitle)
            .invoke('text')
        expect(productTitle).contains.toString(expectedTitle)
    }

    getProductUnitPrice() {
        return cy.get(this.productDetailsPage_label_product_unitPrice).invoke('text')
    }

    selectProductQuantity(quantity) {
        cy.get(this.productDetailsPage_dropdown_quantity)
            .click()
        cy.get(this.productDetailsPage_option_quantity)
            .click()
    }

    clickAddToCart() {
        cy.get(this.productDetailsPage_button_AddToCart)
            .click()
    }

    clickGoToCart() {
        cy.get(this.productDetailsPage_button_goToCart)
            .click()
    }

}