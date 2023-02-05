import { Home } from "./functions/home"
import { ProductList } from "./functions/product_list"
import { ProductDetails } from "./functions/product_details"
import { Cart } from "./functions/cart"

const home = new Home()
const productList = new ProductList()
const productDetails = new ProductDetails()
const cart = new Cart()

describe('All Cart Tests', function() {

    beforeEach(function() {
        home.loadAppUrl()
    })

    it('Validate Amazon cart after clearing the added products', function(){

        home.selectCategoryAndSearchKeyword('Books', 'Automation')

        productList.filterProductsByRatingAndLanguage('English')
        let secondProductName = productList.selectProductByReturningTheProductName(2)
    
        productDetails.validateProductTitle(secondProductName)
        
    
        let productListPrice = productDetails.returnProductUnitPrice()
        productDetails.addProductToCartAndNavigateToCart(2)
        
        expect(cart.returnProductName).contains.toString(secondProductName)
        expect(cart.returnProductQuanity).contains.toString('2')
        let cartTotalPrice = cart.returnCartGrandTotal()
        expect(cartTotalPrice, productListPrice*2, 'Total price mismatch in the cart')
    
        cart.deleteCart()
        let cartTotalPriceAfterClear = cart.returnCartGrandTotal()
        expect(cartTotalPriceAfterClear, '0.00', 'Total price is not zero after clear cart')
    
    })
})

