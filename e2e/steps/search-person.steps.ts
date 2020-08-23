import { Then } from 'cucumber';
import * as chai from 'chai';
chai.use(require('chai-as-promised'));
const searchResultsPersonsPO = require('../page-objects/search-person.po');

Then('I see the full name {string}', async (string) => {
   await searchResultsPersonsPO.characterName.then(function() {
    chai.expect(searchResultsPersonsPO.characterName.getText()).to.eventually.contain(string);
  });
});

Then('I see the gender {string}', async (string) => {
  await searchResultsPersonsPO.characterGender.then(function() {
    chai.expect(searchResultsPersonsPO.characterGender.getText()).to.eventually.contains('Gender:');
    chai.expect(searchResultsPersonsPO.characterGenderValue.getText()).to.eventually.contain(string);
  });
});

Then('I see the birth year {string}', async (string) => {
  await searchResultsPersonsPO.characterBirthYear.then(function() {
    chai.expect(searchResultsPersonsPO.characterBirthYear.getText()).to.eventually.contains('Birth year:');
    chai.expect(searchResultsPersonsPO.characterBirthYearValue.getText()).to.eventually.contain(string);
  });
});

Then('I see the eye color {string}', async (string) => {
  await searchResultsPersonsPO.characterEyeColor.then(function() {
    chai.expect(searchResultsPersonsPO.characterEyeColor.getText()).to.eventually.contains('Eye color:');
    chai.expect(searchResultsPersonsPO.characterEyeColorValue.getText()).to.eventually.contain(string);
  });
});

Then('I see the skin color {string}', async (string) => {
  await searchResultsPersonsPO.characterSkinColor.then(function() {
    chai.expect(searchResultsPersonsPO.characterSkinColor.getText()).to.eventually.contains('Skin color:');
    chai.expect(searchResultsPersonsPO.characterSkinColorValue.getText()).to.eventually.contain(string);
  });
});
