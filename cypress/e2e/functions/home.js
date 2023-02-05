import { HomePage } from "../pages/home_page";

const homePage = new HomePage()

export class Home {

    loadAppUrl() {
        homePage.loadHomePageUrl()
    }

    selectCategoryAndSearchKeyword(categoryName, searchKeyword) {
        homePage.selectCategoryWithKeyword(categoryName)
        homePage.enterSearchText(searchKeyword)
    }
   
}