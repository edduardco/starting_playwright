import { test, expect } from '@playwright/test';
import { TravelocityHomePage } from '../../pages/travelocity/home.page';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.travelocity.com/');
});

test.describe('Travelocity test cases', () => {
  test('Flight Booking Process', async ({ page }) => {
    const homePage = new TravelocityHomePage(page);
    await homePage.goto();
    await homePage.selectDepartingAirport('California');
    await homePage.selectDestinationAirport('New York');
    await homePage.pickDateRange();
    await homePage.searchFlight();

    await expect(homePage.leavingFrom).toBeVisible();
  });
});