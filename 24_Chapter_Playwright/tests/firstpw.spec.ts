
import { test, expect } from '@playwright/test';

test('Verify Playwright website', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

});

test('Verify Get Started link', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toBeVisible();

});
