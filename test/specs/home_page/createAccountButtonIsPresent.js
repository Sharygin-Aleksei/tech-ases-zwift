const expect = require('chai').expect

const home_page = require("../../data/home_page");

describe('HOME PAGE (TOP HERO-BANNER) - "CREATE ACCOUNT" BUTTON IS PRESENT AND CLICKABLE.', () => {

    let createAccountButton;

    it('should load the home page', () => {
        browser.maximizeWindow();
        browser.url(home_page.url);
    })

    it('should have the right title', () => {
        const title = browser.getTitle()

        expect(title).eq(home_page.title);
    })

    it('should have the "CREATE ACCOUNT" button in the top hero-banner', () => {
        createAccountButton = $(home_page.selectors.top_hero_banner.CREATE_ACCOUNT_BUTTON);

        expect(createAccountButton.isDisplayed()).to.be.true;
    })

    it('"CREATE ACCOUNT" button in the top hero-banner should be clickable', () =>{
        expect(createAccountButton.isClickable()).to.be.true;
    })
})