import { expect } from "@playwright/test";
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import LoginPage from "../../pages/loginPage";

setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage;
let assert: Assert;

Given('User navigates to the Tricentis application', async function () {
    loginPage = new LoginPage(fixture.page);
    assert = new Assert(fixture.page);
    await fixture.page.goto(process.env.BASEURL);
})

When('User clicks on the login link', async function () {
    await loginPage.clickLoginLink();
});

When('User enters the email as {string}', async function (username) {
    await loginPage.enterUserName(username);
});

When('User enters the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
})

When('User clicks on the login button', async function () {
    await loginPage.clickLoginButton();
});


// Then('Login should be successful', async function () {
//     const user = fixture.page.locator("//a[@class='ico-logout']");
//     await expect(user).toBeVisible();
//     const userEmail = fixture.page.locator("div[class='header-links'] a[class='account']");
//     const loginEmailId = await user.textContent();
//     console.log("UserLoginEmailId: " + loginEmailId);
//     fixture.logger.info("UserLoginEmailId: " + loginEmailId);
// })

