import { test, expect } from '@playwright/test';

const tonPrenom = 'Antoine';
test("Ajout d'une catégorie", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/categories');

  const numberOfCategories = await page.locator('tr').count();
  await page.locator('#new-category').click();
  await page.waitForURL('http://localhost:5173/admin/category');
  await expect(page).toHaveURL('http://localhost:5173/admin/category');
  await page.locator('#submit').click();
  console.log(page.locator('.error-message'));
  expect(await page.locator('.error-message').count()).toBe(1);

  await page.locator('input[name="name"]').fill('test');
  await page.locator('#submit').click();
  await expect(page).toHaveURL('http://localhost:5173/admin/categories');
  expect((await page.locator('tr').count()) === numberOfCategories + 1, "Le nombre de marques n'a pas augmenté");
});

test("Modification d'une catégorie", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/categories');

  await page.locator('tr:last-child').getByText('modifier').last().click();
  //permet de valider si l'url est bien celle attendue avec une expression régulière (regex). le w+ à la fin dit /plusieurs fois un caractère alphanumérique, donc un id
  await page.waitForURL(/http:\/\/localhost:5173\/admin\/category\/\w+/);
  await expect(page).toHaveURL(/http:\/\/localhost:5173\/admin\/category\/\w+/);

  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  await page.locator('input[name="name"]').fill(tonPrenom);
  await page.locator('#submit').click();

  await expect(page).toHaveURL('http://localhost:5173/admin/categories');
  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  expect(await page.getByText(tonPrenom).count()).toBe(1);
});

test("Suppression d'une catégorie", async ({ page }) => {
  const numberOfCategories = await page.locator('tr').count();
  await page.goto('http://localhost:5173/admin/categories');
  const rowWithRandomName = page.locator('tr', { hasText: tonPrenom });
  await rowWithRandomName.locator('.supprimer').first().click();

  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  expect((await page.locator('tr').count()) === numberOfCategories - 1, "La catégorie n'a pas été supprimée");
});
