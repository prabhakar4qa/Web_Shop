import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect, Browser } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CheckoutOrderPage from "../../pages/checkoutOrderPage";


setDefaultTimeout(60 * 1000 * 2)

let checkoutOrderPage: CheckoutOrderPage

When('Verify the order submitted successfully', async function () {
    checkoutOrderPage = new CheckoutOrderPage(fixture.page);
    checkoutOrderPage.checkoutOrderStatus();
});