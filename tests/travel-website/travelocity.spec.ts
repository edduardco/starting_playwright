import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.travelocity.com/');
});

test.describe('Travelocity test cases', () => {

  test('Flight Booking Process', async ({ page }) => {
  // locators
  const flightsMenu = page.getByRole('tab', { name: 'Flights' });

  const leavingFrom = page.getByRole('button', { name: 'Leaving From' });
  const goingTo = page.getByRole('button', { name: 'Going to' });
  const dateSelector = page.getByLabel(/Dates/i);

  const leavingFromTxt = page.getByPlaceholder('Leaving From');
  const leavingFromSelect = page.getByLabel(/LAX/i);

  const goingToTxt = page.getByPlaceholder('Going to');
  const goingToSelect = page.getByLabel(/JFK/i);

  const departingDate = page.getByRole('button', { name: 'Monday, February 12,' });
  const returningDate = page.getByRole('button', { name: 'Thursday, February 22, 2024,' });
  const applyDateBtn = page.getByRole('button', { name: 'apply-date-selector' });

  const searchBtn = page.getByRole('button', { name: 'search_button' });

  await flightsMenu.click();

  // Select departure airport
  await leavingFrom.click();
  await leavingFromTxt.fill('California');
  await leavingFromSelect.click();

  // Select landing airport
  await goingTo.click();
  await goingToTxt.fill('New York');
  await goingToSelect.click();

  // Pick date range
  await dateSelector.click();
  await departingDate.click();
  await returningDate.click();
  await applyDateBtn.click();

  await searchBtn.click();

  await expect(leavingFrom).toBeVisible();

  });
});