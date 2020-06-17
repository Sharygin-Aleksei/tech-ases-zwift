function getEventSportLabelSelector(numberOfEvent) {
    return '//div[@class="tab-listing"][' + numberOfEvent + ']//span[@class="map-sport-type"]'
}


module.exports = {
    getEventSportLabelSelector
}