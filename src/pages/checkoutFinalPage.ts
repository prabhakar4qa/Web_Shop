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
        selectBillingAddressFormLabel: "Select a billing address from",
        firstNameTextBox: "First name:",
        lastNameTextBox: "Last name:",
        emailTextBox: "Email:",
        countryLabel: "Country:",
        cityTextBox: "City:",
        addressLine1TextBox:"Address 1:",
        zipCodeTextBox: "Zip / postal code:",
        phoneTextBox: "Phone number:",
        checkoutButton: "Checkout",
        continueButton: "Continue",
        confirmButton: "Confirm",
        inStorePickupCheckBox: "In-Store Pickup",
        codRadioButton: "Cash On Delivery (COD) (7.00)",
        codConfirmText: "You will pay by COD",
        backToConfirmText: "« Back Confirm Submitting"
    }

    async enterBillingAddress() {
        await fixture.page.getByLabel(this.Elements.selectBillingAddressFormLabel).selectOption('');
        await fixture.page.getByRole('textbox', { name: this.Elements.firstNameTextBox }).fill(customerDetails.firstName);
        await fixture.page.getByRole('textbox', { name: this.Elements.lastNameTextBox }).fill(customerDetails.lastName);
        await fixture.page.getByRole('textbox', { name: this.Elements.emailTextBox }).fill(customerDetails.email);
        await fixture.page.getByLabel(this.Elements.countryLabel).selectOption(customerDetails.countryId);
        await fixture.page.getByRole('textbox', { name: this.Elements.cityTextBox }).fill(customerDetails.city);
        await fixture.page.getByRole('textbox', { name: this.Elements.addressLine1TextBox }).fill(customerDetails.address1);
        await fixture.page.getByRole('textbox', { name: this.Elements.zipCodeTextBox }).fill(customerDetails.postalCode);
        await fixture.page.getByRole('textbox', { name: this.Elements.phoneTextBox }).fill(customerDetails.phoneNumber);
        await fixture.page.getByRole('button', { name: this.Elements.continueButton }).click();
        await fixture.page.waitForTimeout(2000);
    }
    
    async enterShippingAddress() {  
        await fixture.page.getByRole('checkbox', { name: this.Elements.inStorePickupCheckBox }).check();    
        await fixture.page.getByRole('button', { name: this.Elements.continueButton }).click(); 
    }
    
    async enterPaymentMethod() {   
        await fixture.page.getByRole('radio', { name: this.Elements.codRadioButton }).check();
        await fixture.page.getByRole('button', { name: this.Elements.continueButton }).click(); 
    }

    async enterPaymentInformation() {   
        await fixture.page.getByText(this.Elements.codConfirmText).click();
        await fixture.page.getByRole('button', { name: this.Elements.continueButton }).click();
    }

    async confirmOrder() {   
        await fixture.page.getByText(this.Elements.backToConfirmText).click();
        await fixture.page.getByRole('button', { name: this.Elements.confirmButton }).click();
    }
}

