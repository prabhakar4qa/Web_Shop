import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        loginLink: "//a[@class='ico-login']",
        userEmail: "#Email",
        userPwd: "#Password",
        loginButton: "input[value='Log in']"
    }

    async navigateToLoginPage() {
        await this.base.goto("/login");
        await expect(this.page).toHaveTitle("BookCart");
    }
    async clickLoginLink() {        
        await this.base.waitAndClick(this.Elements.loginLink);
    }
    async enterUserName(user: string) {        
        await this.page.locator(this.Elements.userEmail).fill(user);        
    }
    async enterPassword(password: string) {
        await this.page.locator(this.Elements.userPwd).fill(password);  
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginButton);
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}