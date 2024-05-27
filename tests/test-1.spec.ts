import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').press('CapsLock');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('X');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('CapsLock');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Xbox');
  await page.screenshot({ path: 'screenshot2.png' });
  await page.getByPlaceholder('Buscar productos, marcas y má').press('ArrowDown');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('ArrowDown');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('ArrowDown');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.screenshot({ path: 'screenshot3.png' });
  await page.getByRole('link', { name: 'Xbox One Fat', exact: true }).click();
  await page.screenshot({ path: 'screenshot4.png' });
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('Crear cuenta')).toBeVisible();
  await page.screenshot({ path: 'screenshot5.png' });
});