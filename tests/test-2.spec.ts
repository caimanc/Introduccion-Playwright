import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://consensus.app/search/');
 await page.getByRole('button', { name: 'Sign In' }).click();
 await page.getByLabel('Email address').click();
 await page.getByLabel('Email address').fill('motatin731@javnoi.com');
 await page.getByRole('button', { name: 'Continue', exact: true }).click();
 await page.getByLabel('Password', { exact: true }).fill('pruebas1234');
 await page.getByLabel('Password', { exact: true }).press('Enter');
 await expect(page.getByTestId('search-input')).toBeVisible();
 await page.getByTestId('search-input').click();
});