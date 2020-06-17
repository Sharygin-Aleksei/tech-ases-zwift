const expect = require('chai').expect

const home_page = require("../../data/home_page");
const events_page = require("../../data/events_page");
const navigation_bar = require("../../data/navigation_bar");
const events_page_helpers = require("../../helpers/events_page")


describe('EVENTS PAGE - Events changed after applying filters', () => {

    let eventsCounter = 0;

    it('should load the home page', () => {
        browser.maximizeWindow();
        browser.url(home_page.url);
    })

    it('should have "EVENTS" button in the top-navigation menu', () => {
        browser.waitUntil(
            () => $(navigation_bar.selectors.EVENTS_BUTTON).isClickable() === true);
    })

    it('should click "EVENTS" button in the top-navigation menu and redirect to /EVENTS page', () => {
        $(navigation_bar.selectors.EVENTS_BUTTON).click();
        const pageTitle = browser.getTitle();

        expect(pageTitle).eq(events_page.title);
    })

    it('events-header should be displayed', () => {
        browser.waitUntil(() => $(events_page.selectors.EVENTS_PAGE_HEADER).isDisplayed() === true);
    })

    it('should count the number of events', () => {
        const eventsArray = $$(events_page.selectors.event);
        eventsCounter = eventsArray.length;

        expect(eventsCounter, 'There are no events at the events page').to.be.above(0);
    })

    it('should populate "Sports" field with "Cycling"', () => {
        const sportsSelect = $(events_page.selectors.select.SPORTS_SELECT);
        sportsSelect.selectByVisibleText(events_page.select_values.sports.cycling.text)

        expect(sportsSelect.getValue()).eq(events_page.select_values.sports.cycling.value);
    })

    it('should populate "Intensities" field with "A"', () => {
        const intensitiesSelect = $(events_page.selectors.select.INTENSITIES_SELECT);
        intensitiesSelect.selectByVisibleText(events_page.select_values.intensities.A.text)

        expect(intensitiesSelect.getValue()).eq(events_page.select_values.intensities.A.value);
    })

    it('should populate "Start Times" field with "Morning"', () => {
        const intensitiesSelect = $(events_page.selectors.select.START_TIMES_SELECT);
        intensitiesSelect.selectByVisibleText(events_page.select_values.startTime.morning.text)

        expect(intensitiesSelect.getValue()).eq(events_page.select_values.startTime.morning.value);
    })

    it('should check that number of events have changed', () => {
        const eventsArray = $$(events_page.selectors.event);
        const numberOfEvents = eventsArray.length;

        expect(numberOfEvents).to.be.below(eventsCounter);

        eventsCounter = numberOfEvents;
    })

    it('should check that first Event has correct "SPORT" label, if events page not empty', () => {
        if (eventsCounter > 0) {
            const firstEventSportLabel = $(events_page_helpers.getEventSportLabelSelector(1));

            expect(firstEventSportLabel.getText()).to.be.eq(events_page.select_values.sports.cycling.value);
        }
    })
})


