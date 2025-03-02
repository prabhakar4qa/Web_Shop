import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export default class RegisterPage {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        user: "//a[@class='ico-logout']",
        category: "div[class='block block-category-navigation'] li:nth-child(1) a:nth-child(1)",
        item1: "//div[@class='product-grid']//div[3]//div[1]//div[2]//div[3]//div[2]//input[1]",
        badgeCount: "//span[@class='cart-qty']"
    }

    async navigateToDemoWebShopPage() {
        await expect(fixture.page.locator(this.Elements.user)).toBeVisible();
    }
    
    async selectCategory(category: string) {
        const cat = fixture.page.locator(this.Elements.category);
        await cat.click();        
    }

    async addtoCart() {
        console.log("In add to cart method");
        const categoryList = this.page.locator(this.Elements.category);
        await categoryList.click();
        const item = this.page.locator(this.Elements.item1);
        await item.click();        
    }
}

