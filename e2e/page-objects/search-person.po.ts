import { element, by } from 'protractor';

module.exports = {
  get characterName() {
    return element.all(by.id('character-name'));
  },
  get characterGender() {
    return element.all(by.id('gender'));
  },
  get characterGenderValue() {
    return element.all(by.id('gender-value'));
  },
  get characterBirthYear() {
    return element.all(by.id('birth-year'));
  },
  get characterBirthYearValue() {
    return element.all(by.id('birth-year-value'));
  },
  get characterEyeColor() {
    return element.all(by.id('eye-color'));
  },
  get characterEyeColorValue() {
    return element.all(by.id('eye-color-value'));
  },
  get characterSkinColor() {
    return element.all(by.id('skin-color'));
  },
  get characterSkinColorValue() {
    return element.all(by.id('skin-color-value'));
  },
  get notFoundText() {
    return element(by.id('not-found'));
  }
};
