import { expect, type Locator, type Page } from '@playwright/test';

export class TravelocityHomePage {
  readonly page: Page;
  readonly flightsMenu: Locator;
  readonly leavingFrom: Locator;
  readonly goingTo: Locator;
  readonly dateSelector: Locator;
  readonly leavingFromTxt: Locator;
  readonly leavingFromSelect: Locator;
  readonly goingToTxt: Locator;
  readonly goingToSelect: Locator;
  readonly departingDate: Locator;
  readonly returningDate: Locator;
  readonly applyDateBtn: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightsMenu = page.getByRole('tab', { name: 'Flights' });
    this.leavingFrom = page.getByRole('button', { name: 'Leaving From' });
    this.goingTo = page.getByRole('button', { name: 'Going to' });
    this.dateSelector = page.getByLabel(/Dates/i);
    this.leavingFromTxt = page.getByPlaceholder('Leaving From');
    this.leavingFromSelect = page.getByLabel(/LAX/i);
    this.goingToTxt = page.getByPlaceholder('Going to');
    this.goingToSelect = page.getByLabel(/JFK/i);
    this.departingDate = page.getByRole('button', { name: 'Monday, February 12,' });
    this.returningDate = page.getByRole('button', { name: 'Thursday, February 22, 2024,' });
    this.applyDateBtn = page.getByRole('button', { name: 'apply-date-selector' });
    this.searchBtn = page.getByRole('button', { name: 'search_button' });
  }

  async goto() {
    await this.page.goto('https://www.travelocity.com');
  }

  /**
   * Selects departing airport
   * @param departingAirport 
   */
  async selectDepartingAirport(departingAirport: string) {
    await this.leavingFrom.click();
    await this.leavingFromTxt.fill(departingAirport);
    await this.leavingFromSelect.click();
  }

  /**
   * Selects destination airport
   * @param destinationAirport 
   */
  async selectDestinationAirport(destinationAirport: string) {
    await this.goingTo.click();
    await this.goingToTxt.fill(destinationAirport);
    await this.goingToSelect.click();
  }

  /**
   * Picks a date range
   */
  async pickDateRange() {
    await this.dateSelector.click();
    await this.departingDate.click();
    await this.returningDate.click();
    await this.applyDateBtn.click();
  }

  async searchFlight() {
    await this.searchBtn.click();
  }
}