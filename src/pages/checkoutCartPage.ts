import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export default class RegisterPage {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        shoppingCart: "//span[normalize-space()='Shopping cart']",
        termsofService: "//input[@id='termsofservice']",
        checkout: "//button[@id='checkout']"
    }

    async navigateToShoppingcartPage() {
        const cartLink = fixture.page.locator(this.Elements.shoppingCart);
        await cartLink.click();        
    }
    
    async acceptTermsandConditions() {
        const termsAccept = fixture.page.locator(this.Elements.termsofService);
        await termsAccept.click();        
    }

    async checkouttheCart() {
        const checkout = fixture.page.locator(this.Elements.checkout);
        await checkout.click();        
    }
    
}

