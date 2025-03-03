import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export default class RegisterPage {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        orderStatus: "//div[@class='section order-completed']/div[@class='title']/strong"
    }

    async checkoutOrderStatus() {
        await expect(fixture.page.locator(this.Elements.orderStatus)).toContainText("Your order has been successfully processed!");
    }
    
}

