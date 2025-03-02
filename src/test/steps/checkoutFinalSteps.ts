import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect, Browser } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CheckoutFinalPage from "../../pages/checkoutFinalPage";


setDefaultTimeout(60 * 1000 * 2)

let checkoutFinalPage: CheckoutFinalPage;

When('Enter all the checkout details before submitting the order', async function () {
    checkoutFinalPage = new CheckoutFinalPage(fixture.page);
    
    checkoutFinalPage.enterBillingDetails();
    checkoutFinalPage.enterShippingDetails();
    checkoutFinalPage.enterShippingMethodDetails();
    checkoutFinalPage.enterPaymentMethodDetails();
    checkoutFinalPage.enterPaymentInformation();
    checkoutFinalPage.confirmOrder();
});