import { ProductListPage } from "../pages/product_list_page";

const productListPage = new ProductListPage()

export class ProductList {

    filterProductsByRatingAndLanguage(language) {
        productListPage.filterProductsWithFourStarsAndAboveRating()
        productListPage.selectLanguage(language)
    }

    selectProductByReturningTheProductName(index) {
        let selectedProductName = productListPage.getProductNameByIndex(index)
        productListPage.clickProductByIndex(index)
        return selectedProductName
    }


    

   
}