import { CartPage } from "../pages/cart_page";
import { ProductDetailPage } from "../pages/product_details_page";

const productDetailsPage = new ProductDetailPage()
const cartPage = new CartPage()

export class ProductDetails {
    
    validateProductTitle(expectedTitle) {
        return productDetailsPage.getProductTitleAndValidate(expectedTitle)
    }

    returnProductUnitPrice() {
        return productDetailsPage.getProductUnitPrice()
    }

    addProductToCartAndNavigateToCart(productQuantity) {
        productDetailsPage.selectProductQuantity(productQuantity)
        productDetailsPage.clickAddToCart()
        productDetailsPage.clickGoToCart()
    }


    

   
}