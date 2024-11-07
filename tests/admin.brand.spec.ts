import { test, expect } from '@playwright/test';

const tonPrenom = 'Antoine';
test("Ajout d'une marque", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/brands');

  const numberOfBrands = await page.locator('tr').count();
  await page.locator('#new-brand').click();
  await page.waitForURL('http://localhost:5173/admin/brand');
  await expect(page).toHaveURL('http://localhost:5173/admin/brand');
  await page.locator('#submit').click();
  console.log(page.locator('.error-message'));
  expect(await page.locator('.error-message').count()).toBe(2);

  await page.locator('#logoUrl').fill('https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png');
  await page.locator('input[name="name"]').fill('test');
  await page.locator('#submit').click();
  await expect(page).toHaveURL('http://localhost:5173/admin/brands');
  expect((await page.locator('tr').count()) === numberOfBrands + 1, "Le nombre de marques n'a pas augmenté");
});

test("Modification d'une marque", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/brands');

  await page.locator('tr:last-child').getByText('modifier').last().click();
  //permet de valider si l'url est bien celle attendue avec une expression régulière (regex). le w+ à la fin dit /plusieurs fois un caractère alphanumérique, donc un id
  await page.waitForURL(/http:\/\/localhost:5173\/admin\/brand\/\w+/);
  await expect(page).toHaveURL(/http:\/\/localhost:5173\/admin\/brand\/\w+/);

  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  await page.locator('input[name="name"]').fill(tonPrenom);
  await page.locator('#submit').click();

  await expect(page).toHaveURL('http://localhost:5173/admin/brands');
  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  expect(await page.getByText(tonPrenom).count()).toBe(1);
});

test("Suppression d'une marque", async ({ page }) => {
  const numberOfBrands = await page.locator('tr').count();
  await page.goto('http://localhost:5173/admin/brands');
  const rowWithRandomName = page.locator('tr', { hasText: tonPrenom });
  await rowWithRandomName.locator('.supprimer').first().click();

  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  expect((await page.locator('tr').count()) === numberOfBrands - 1, "La marque n'a pas été supprimée");
});
