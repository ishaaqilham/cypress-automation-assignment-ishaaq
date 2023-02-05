import { HomePage } from "./pages/home_page"
import { ProductDetailPage } from "./pages/product_details_page"
import { ProductListPage } from "./pages/product_list_page"
import { CartPage } from "./pages/cart_page"

const homePage = new HomePage()
const productListPage = new ProductListPage()
const productDetailsPage = new ProductDetailPage()
const cartPage = new CartPage()

describe('All Cart Tests', function() {

    beforeEach(function() {
        homePage.loadHomePageUrl()
    })

    it('Validate Amazon cart after clearing the added products', function(){

        homePage.selectCategoryWithKeyword('Books')
        homePage.enterSearchText('Automation')
    
        productListPage.filterProductsWithFourStarsAndAboveRating()
        productListPage.selectLanguage('English')
        let secondProductName = productListPage.getProductNameByIndex(2)
        productListPage.clickProductByIndex(2)
    
        productDetailsPage.getProductTitleAndValidate(secondProductName)
        
    
        let productListPrice = productDetailsPage.getProductUnitPrice()
        productDetailsPage.selectProductQuantity(2)
        productDetailsPage.clickAddToCart()
        productDetailsPage.clickGoToCart()
        
        expect(cartPage.getProductName()).contains.toString(secondProductName)
        expect(cartPage.getProductQuantity()).contains.toString('2')
        let cartTotalPrice = cartPage.getCartTotal()
        expect(cartTotalPrice, productListPrice*2, 'Total price mismatch in the cart')
    
        cartPage.clearCart()
        let cartTotalPriceAfterClear = cartPage.getCartTotal()
        expect(cartTotalPriceAfterClear, '0.00', 'Total price is not zero after clear cart')
    
    })
})

