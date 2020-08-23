import { element, by } from 'protractor';

module.exports = {
  get planetName() {
    return element.all(by.id('planet-name'));
  },
  get planetPopulation() {
    return element.all(by.id('population'));
  },
  get planetPopulationValue() {
    return element.all(by.id('population-value'));
  },
  get planetClimate() {
    return element.all(by.id('climate'));
  },
  get planetClimateValue() {
    return element.all(by.id('climate-value'));
  },
  get planetGravity() {
    return element.all(by.id('gravity'));
  },
  get planetGravityValue() {
    return element.all(by.id('gravity-value'));
  }
};
