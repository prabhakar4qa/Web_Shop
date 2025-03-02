import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

const data = JSON.parse(JSON.stringify(require("../helper/util/test-data/customerDetails.json")));


export default class RegisterPage {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        // Billing details section
        billingAddressDDL: "//select[@id='billing-address-select']",
        firstName: "//input[@id='BillingNewAddress_FirstName']",
        lastName: "//input[@id='BillingNewAddress_LastName']",
        email: "//input[@id='BillingNewAddress_Email']",
        countryDDL: "#BillingNewAddress_CountryId",
        city: "//input[@id='BillingNewAddress_City']",
        address1: "//input[@id='BillingNewAddress_Address1']",
        postalCode: "//input[@id='BillingNewAddress_ZipPostalCode']",
        phoneNumber: "//input[@id='BillingNewAddress_PhoneNumber']",
        billContinue: "//input[@onclick='Billing.save()']",

        //Shipping Address section
        shpadrContinue: "//input[@onclick='Shipping.save()']",

        //Shipping Method section
        shpmethodContinue: "//input[@class='button-1 shipping-method-next-step-button']",

        //Payment Method section
        pmtmethodContinue: "//input[@class='button-1 payment-method-next-step-button']",

        //Payment Information section
        pmtinfoContinue: "//input[@class='button-1 payment-info-next-step-button']",

        //Confirm order section
        orderConfirm: "//input[@value='Confirm']"

    }

    async enterBillingDetails() {
        await this.page.locator(this.Elements.billingAddressDDL).selectOption("New Address");
        await this.page.locator(this.Elements.firstName).fill(data.firstName);
        await this.page.locator(this.Elements.lastName).fill(data.lastName);
        await this.page.locator(this.Elements.email).fill(data.email);
        await this.page.locator(this.Elements.countryDDL).selectOption(data.country);
        await this.page.locator(this.Elements.city).fill(data.city);
        await this.page.locator(this.Elements.address1).fill(data.address1);
        await this.page.locator(this.Elements.postalCode).fill(data.postalCode);
        await this.page.locator(this.Elements.phoneNumber).fill(data.phoneNumber);
        await this.page.locator(this.Elements.billContinue).dblclick();

    }
    
    async enterShippingDetails() {  
        await this.page.locator(this.Elements.shpadrContinue).click(); 
    }
   
    async enterShippingMethodDetails() {   
        await this.page.locator(this.Elements.shpmethodContinue).click(); 
    }
    
    async enterPaymentMethodDetails() {   
        await this.page.locator(this.Elements.pmtmethodContinue).click(); 
    }

    async enterPaymentInformation() {   
        await this.page.locator(this.Elements.pmtinfoContinue).click(); 
    }

    async confirmOrder() {   
        await this.page.locator(this.Elements.orderConfirm).click(); 
    }
}

