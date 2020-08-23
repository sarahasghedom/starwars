import { Then } from 'cucumber';
import * as chai from 'chai';
chai.use(require('chai-as-promised'));
const searchResultsPlanetsPO = require('../page-objects/search-planet.po');

Then('I see the full planet name {string}', async (string) => {
  await searchResultsPlanetsPO.planetName.then(function() {
    chai.expect(searchResultsPlanetsPO.planetName.getText()).to.eventually.contain(string);
  });
});

Then('I see the population {string}', async (string) => {
  await searchResultsPlanetsPO.planetPopulation.then(function() {
    chai.expect(searchResultsPlanetsPO.planetPopulation.getText()).to.eventually.contains('Population:');
    chai.expect(searchResultsPlanetsPO.planetPopulationValue.getText()).to.eventually.contain(string);
  });
});

Then('I see the climate {string}', async (string) => {
  await searchResultsPlanetsPO.planetClimate.then(function() {
    chai.expect(searchResultsPlanetsPO.planetClimate.getText()).to.eventually.contains('Climate:');
    chai.expect(searchResultsPlanetsPO.planetClimateValue.getText()).to.eventually.contain(string);
  });
});

Then('I see the gravity {string}', async (string) => {
  await searchResultsPlanetsPO.planetGravity.then(function() {
    chai.expect(searchResultsPlanetsPO.planetGravity.getText()).to.eventually.contains('Gravity:');
    chai.expect(searchResultsPlanetsPO.planetGravityValue.getText()).to.eventually.contain(string);
  });
});
