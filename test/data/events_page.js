const title = 'Zwift | Events on Zwift';

const selectors = {
    EVENTS_PAGE_HEADER: '//header[@id="events-header"]',

    // In most cases return more than one element
    EVENT: '//div[@class="tab-listing"]',

    select: {
        SPORTS_SELECT: '//select[option[text() = "Sports"]]',
        INTENSITIES_SELECT: '//select[option[text() = "Intensities"]]',
        START_TIMES_SELECT: '//select[option[text() = "Start Times"]]'
    }
}

const select_values = {
    sports: {
        cycling: {
            text: 'Cycling',
            value: 'CYCLING'
        }
    },

    intensities: {
        A: {
            text: 'A',
            value: '1'
        }
    },

    startTime: {
        morning: {
            text: 'Morning',
            value: 'morning'
        }
    }
}

module.exports = {
    title, selectors, select_values
}