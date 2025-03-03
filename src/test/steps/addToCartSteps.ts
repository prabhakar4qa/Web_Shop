import { expect } from "@playwright/test";
import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import AddToCartPage from "../../pages/addToCartPage";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

let addToCartPage: AddToCartPage;

When('User navigates to the Web Shop home page', async function () {
    addToCartPage = new AddToCartPage(fixture.page);
    await addToCartPage.navigateToDemoWebShopPage();
});

When('user select the item category {string}', async function (categoryName) {
    await addToCartPage.selectCategory(categoryName);
});

When('user add the items to the cart {string}', async function (book) {
    await addToCartPage.addToCart();
});

Then('the cart badge should get updated', async function () {
    const badgeCount = await fixture.page.locator("//span[@class='cart-qty']").textContent();
    expect(Number(parseInt(badgeCount.charAt(1)))).toBeGreaterThan(0);
});
