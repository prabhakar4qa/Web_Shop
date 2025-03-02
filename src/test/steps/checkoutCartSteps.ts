import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CheckoutCartPage from "../../pages/checkoutCartPage";

setDefaultTimeout(60 * 1000 * 2)

let checkoutCartPage: CheckoutCartPage;

When('Accept the TermsAndConditions before proceeding', async function () {
    checkoutCartPage = new CheckoutCartPage(fixture.page);
    await checkoutCartPage.navigateToShoppingcartPage();
    
    //wait for the checkout page to load
    await fixture.page.waitForTimeout(2000);

    await checkoutCartPage.acceptTermsandConditions();
    await checkoutCartPage.checkouttheCart();
});