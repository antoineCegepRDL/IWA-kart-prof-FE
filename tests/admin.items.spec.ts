import { test, expect } from '@playwright/test';

const tonPrenom = 'Antoine';
test("Ajout d'un item en échec (validation des champs)", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/items');
  await page.locator('#new-item').click();
  await page.waitForURL('http://localhost:5173/admin/item');
  await expect(page).toHaveURL('http://localhost:5173/admin/item');
  await page.locator('#submit').click();
  console.log(page.locator('.error-message'));
  expect(await page.locator('.error-message').count()).toBe(7);

  await page.locator('input[name="name"]').fill('test');
  await page.locator('textarea[name="description"]').fill('test');
  await page.locator('input[name="price"]').fill('0');
  await page.locator('input[name="quantity"]').fill('0');
  await page.locator('input[name="discountPercentage"]').fill('-1');
  await page
    .locator('input[name="imageUrl"]')
    .fill('https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png');
  await page.locator('select[name="brandId"]').selectOption({ index: 1 });
  await page.locator('input[type="checkbox"]').first().check();
  expect(await page.locator('.error-message').count()).toBe(
    3,
    'Les valeurs numériques doivent être supérieures ou égales à 0'
  );

  await page.locator('input[name="price"]').fill('10');
  await page.locator('input[name="quantity"]').fill('10');
  await page.locator('input[name="discountPercentage"]').fill('10');

  expect(await page.locator('.error-message').count()).toBe(1, 'Le pourcentage de rabais doit être entre 0 et 1');

  await page.locator('input[name="discountPercentage"]').fill('0');
  expect(await page.locator('.error-message').count()).toBe(0);
});

test("Ajout d'un item", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/items');

  const numberOfCategories = await page.locator('tr').count();
  await page.locator('#new-item').click();
  await page.waitForURL('http://localhost:5173/admin/item');
  await expect(page).toHaveURL('http://localhost:5173/admin/item');
  await page.locator('#submit').click();
  console.log(page.locator('.error-message'));
  expect(await page.locator('.error-message').count()).toBe(7);

  await page.locator('input[name="name"]').fill('test');
  await page.locator('textarea[name="description"]').fill('test');
  await page.locator('input[name="price"]').fill('10');
  await page.locator('input[name="quantity"]').fill('10');
  await page.locator('input[name="discountPercentage"]').fill('.5');
  await page
    .locator('input[name="imageUrl"]')
    .fill('https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png');
  await page.locator('select[name="brandId"]').selectOption({ index: 1 });
  await page.locator('input[type="checkbox"]').first().check();

  await page.locator('#submit').click();
  await expect(page).toHaveURL('http://localhost:5173/admin/items');
  expect((await page.locator('tr').count()) === numberOfCategories + 1, "Le nombre de marques n'a pas augmenté");
});

test("Modification d'un item", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/items');

  await page.locator('tr:last-child').getByText('modifier').last().click();
  //permet de valider si l'url est bien celle attendue avec une expression régulière (regex). le w+ à la fin dit /plusieurs fois un caractère alphanumérique, donc un id
  await page.waitForURL(/http:\/\/localhost:5173\/admin\/item\/\w+/);
  await expect(page).toHaveURL(/http:\/\/localhost:5173\/admin\/item\/\w+/);

  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  await page.locator('input[name="name"]').fill(tonPrenom);
  await page.locator('#submit').click();

  await expect(page).toHaveURL('http://localhost:5173/admin/items');
  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  expect(await page.getByText(tonPrenom).count()).toBe(1);
});

test("Suppression d'un item", async ({ page }) => {
  await page.goto('http://localhost:5173/admin/items');
  const numberOfItems = await page.locator('tr').count();
  console.log('🚀 ~ test ~ numberOfCategories:', numberOfItems);
  const rowWithRandomName = page.locator('tr', { hasText: tonPrenom });
  await rowWithRandomName.locator('.supprimer').first().click();

  // Permet d'attendre que la page charge complètement avant de changer la valeur du champ
  await page.waitForTimeout(400);
  console.log("🚀 ~ test ~ (await page.locator('tr').count():", await page.locator('tr').count());
  expect((await page.locator('tr').count()) === numberOfItems - 1, "L item n'a pas été supprimée");
});
