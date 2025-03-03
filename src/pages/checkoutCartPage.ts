import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

const customerDetails = JSON.parse(JSON.stringify(require("../helper/util/test-data/customerDetails.json")));

export default class RegisterPage {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        shoppingCart: "//span[normalize-space()='Shopping cart']",
        termsOfService: "#termsofservice",
        checkoutButton: "Checkout",
        countryLabel: "Country:"
    }

    async navigateToShoppingCartPage() {
        const cartLink = fixture.page.locator(this.Elements.shoppingCart);
        await cartLink.click();
    }
    
    async selectCountry() {
        await fixture.page.getByLabel(this.Elements.countryLabel).selectOption(customerDetails.countryId);        
    }
    
    async acceptTermsAndConditions() {
        const termsAccept = fixture.page.locator(this.Elements.termsOfService);
        await termsAccept.check();        
    }

    async checkoutTheCart() {
        await fixture.page.getByRole('button', { name: this.Elements.checkoutButton }).click();   
    }    
}