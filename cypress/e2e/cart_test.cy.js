import { Home } from "./functions/home"
import { ProductList } from "./functions/product_list"
import { ProductDetails } from "./functions/product_details"
import { Cart } from "./functions/cart"
import deleteCartTestData from "../fixtures/cart_data/clear_cart_data.json"

const home = new Home()
const productList = new ProductList()
const productDetails = new ProductDetails()
const cart = new Cart()

describe('All Cart Tests', function() {

    beforeEach(function() {
        home.loadAppUrl()
    })

    it('Validate Amazon cart after clearing the added products', {tags: 'regression'} ,function(){

        home.selectCategoryAndSearchKeyword(deleteCartTestData.category, deleteCartTestData.searchTerm)

        productList.filterProductsByRatingAndLanguage(deleteCartTestData.language)
        let secondProductName = productList.selectProductByReturningTheProductName(deleteCartTestData.productIndex)
    
        productDetails.validateProductTitle(secondProductName)
        
    
        let productListPrice = productDetails.returnProductUnitPrice()
        productDetails.addProductToCartAndNavigateToCart(deleteCartTestData.quantity)
        
        expect(cart.returnProductName).contains.toString(secondProductName)
        expect(cart.returnProductQuanity).contains.toString(deleteCartTestData.quantity)
        let cartTotalPrice = cart.returnCartGrandTotal()
        expect(cartTotalPrice, productListPrice*2, 'Total price mismatch in the cart')
    
        cart.deleteCart()
        let cartTotalPriceAfterClear = cart.returnCartGrandTotal()
        expect(cartTotalPriceAfterClear, deleteCartTestData.emptyCartPrice, 'Total price is not zero after clear cart')
    
    })

    afterEach (function() {
        
    })
})

