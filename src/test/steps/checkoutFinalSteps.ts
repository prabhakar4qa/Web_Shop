import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CheckoutFinalPage from "../../pages/checkoutFinalPage";

setDefaultTimeout(60 * 1000 * 2)

let checkoutFinalPage: CheckoutFinalPage;

When('Enter all the checkout details before submitting the order', async function () {
    checkoutFinalPage = new CheckoutFinalPage(fixture.page);

    //wait for the page to load
    await fixture.page.waitForTimeout(2000);
    checkoutFinalPage.enterBillingAddress();

    //wait for the page to load
    await fixture.page.waitForTimeout(2000);
    checkoutFinalPage.enterShippingAddress();

    //wait for the page to load
    await fixture.page.waitForTimeout(2000);
    checkoutFinalPage.enterPaymentMethod();

    //wait for the page to load
    await fixture.page.waitForTimeout(2000);
    checkoutFinalPage.enterPaymentInformation();

    //wait for the page to load
    await fixture.page.waitForTimeout(2000);
    checkoutFinalPage.confirmOrder();
    await fixture.page.waitForTimeout(5000);
});