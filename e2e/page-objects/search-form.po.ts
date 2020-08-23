import { element, by } from 'protractor';

module.exports = {
    get pageTitle() {
        return element(by.id('page-title'));
    },
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get searchTypePlanets() {
        return element(by.id('planets'));
    },
    get searchTypePeople() {
        return element(by.id('people'));
    },
    get searchType() {
        return element.all(by.id('search-type'));
    },
    get notFoundText() {
        return element(by.id('not-found'));
    }
};
