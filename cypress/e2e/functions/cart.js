import { CartPage } from "../pages/cart_page";

const cartPage = new CartPage()

export class Cart {
    returnProductName() {
        return cartPage.getProductName()
    }

    returnProductQuanity() {
        return cartPage.getProductQuantity()
    }

    returnCartGrandTotal() {
        return cartPage.getCartTotal()
    }

    deleteCart() {
        cartPage.clearCart()
    }

}