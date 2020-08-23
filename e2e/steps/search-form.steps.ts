import {Given, Then, When} from 'cucumber';
import {browser, protractor} from 'protractor';
import * as chai from 'chai';
chai.use(require('chai-as-promised'));
const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', async (string) => {
  await browser.driver.get('http://' + string + ':4200/');
  await chai.expect(searchFormPO.pageTitle.isDisplayed()).to.eventually.be.true;
});

When('I search for {string} and click on the search button', async (string) => {
  await searchFormPO.input.click();
  await searchFormPO.input.sendKeys(string);
  await searchFormPO.searchBtn.click();
});

When('I search for {string} and press enter', async (string) => {
  await searchFormPO.input.click();
  await searchFormPO.input.sendKeys(string);
  await searchFormPO.input.sendKeys(protractor.Key.ENTER);
});

When('I search on {string}', async (string) => {
  if (string === 'Planets') {
    await searchFormPO.searchTypePlanets.click();
  } else {
    await searchFormPO.searchTypePeople.click();
  }
});

Then('there are no results found', async () => {
  await chai.expect(searchFormPO.notFoundText.getText()).to.eventually.contain('Not found');
});
