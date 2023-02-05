export class CartPage{
    cartPage_label_productName = '.a-truncate-cut'
    cartPage_label_productQuanity = '.a-dropdown-prompt'
    cartPage_label_subTotal = '#sc-subtotal-amount-activecart > .a-size-medium'
    cartPage_button_deleteCart = '.sc-action-delete > .a-declarative > .a-color-link'

    getProductName() {
        return cy.get(this.cartPage_label_productName)
    }

    getProductQuantity() {
        return cy.get(this.cartPage_label_productQuanity)
    }

    getCartTotal() {
        return cy.get(this.cartPage_label_subTotal).invoke('text')
    }

    clearCart() {
        cy.get(this.cartPage_button_deleteCart)
            .click()
    }

}