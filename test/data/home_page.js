const url = 'https://zwift.com/';

const title = 'The at Home Cycling & Running Virtual Training App';

let selectors = {
    top_hero_banner: {
        CREATE_ACCOUNT_BUTTON: '//section[@class="hero-banner"]//button[@label="Create Account"][1]'
    }
};

module.exports = {
    url, title, selectors
}

