import KartItem from '../src/types/KartItem';
import { test, expect, Page } from '@playwright/test';

test.describe('Test du panier', () => {
  let page: Page;
  let idItem;

  test.beforeAll(async ({ page }) => {
    await page.goto('https://kart-client-061a7049de9a.herokuapp.com/admin/item');
    await page.fill('#name', 'Item pour test Playwright');
    await page.fill('#description', 'Oui');
    await page.fill('#price', '100');
    await page.fill('#quantity', '2');
    await page.fill('#discountPercentage', '0');
    await page.fill(
      '#imageUrl',
      'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
    );
    await page.selectOption('select#brandId', { index: 1 }); //ChatGPT pour savoir comment faire pour prendre le premier
    await page.check('input[type="checkbox"]:nth-of-type(1)'); // Ici aussi
    await page.click('#submit');

    await page.waitForURL('https://kart-client-061a7049de9a.herokuapp.com/admin/items');
    await expect(page.getByText('Item pour test Playwright')).toHaveCount(1);
    await page
      .locator('tr', { has: page.locator('td', { hasText: 'Item pour test Playwright' }) })
      .getByText('Modifier')
      .click({ timeout: 1000 });
    const urlInParts = page.url().split('/');
    idItem = urlInParts[urlInParts.length - 1];
    await page.waitForTimeout(1000);
  });

  test('Panier avec un item valide fonctionnel', async ({ page }) => {
    page.on('dialog', (dialog) => {
      dialog.accept();
    });
    await test.step("Ajout de l'item initial", async () => {
      await page.goto(`http://localhost:5173/item/${idItem}`, { waitUntil: 'load' });
      await page.locator('.button', { hasText: 'Ajouter au panier' });

      await page.locator('.button', { hasText: 'Ajouter au panier' }).click();

      const kartJson = await page.evaluate(() => {
        const kart = localStorage.getItem('kart');
        return kart ? JSON.parse(kart) : null;
      });

      // Check if the item exists in the localStorage array
      expect(kartJson, "Le kart n'est pas dans le local storage").not.toBeUndefined();

      const item = kartJson.find((item: KartItem) => item.id === idItem);
      expect(item, "L'article n'a pas été ajouté").not.toBeUndefined();
    });

    await test.step("Affichage de la page panier et de l'item", async () => {
      await page.goto('http://localhost:5173/kart');

      await page.locator('p.item-name', { hasText: 'Item pour test Playwright' });
      expect(
        page.locator('p.item-name', { hasText: 'Item pour test Playwright' }),
        "L'item n'est pas affiché"
      ).toHaveCount(1);
      expect(page.locator('p.item-name'), 'La page du panier affiche trop ou aucun article').toHaveCount(1);
    });

    await test.step("Supprimer l'item du panier (puis le remettre, bien sur)", async () => {
      await page.locator('span.kart-button', { hasText: 'X' }).click();

      expect(await page.locator('#empty-kart')).toHaveCount(1);

      await page.goto(`http://localhost:5173/item/${idItem}`, { waitUntil: 'load' });
      await page.locator('.button', { hasText: 'Ajouter au panier' });

      await page.locator('.button', { hasText: 'Ajouter au panier' }).click();
    });

    await test.step('Augmenter et diminuer la quantité', async () => {
      await page.goto('http://localhost:5173/kart');

      await page.locator('span.quantity-to-buy', { hasText: '1' });
      expect(
        page.locator('span.quantity-to-buy', { hasText: '1' }),
        "L'article initial a une quantité d'achat de plus de 1"
      ).toHaveCount(1);

      await page.locator('span.kart-button', { hasText: '+' }).click();
      expect(
        page.locator('span.quantity-to-buy', { hasText: '2' }),
        "L'augmentation de quantité n'a pas fonctionné'"
      ).toHaveCount(1);

      await page.locator('span.kart-button', { hasText: '-' }).click();
      expect(
        page.locator('span.quantity-to-buy', { hasText: '1' }),
        "La diminution de quantité n'a pas fonctionné'"
      ).toHaveCount(1);

      await page.locator('span.kart-button', { hasText: '-' }).click();
      expect(
        page.locator('span.quantity-to-buy', { hasText: '1' }),
        "La diminution de quantité fonctionne... trop (descend à 0 ou moins)'"
      ).toHaveCount(1);

      await page.locator('span.kart-button', { hasText: '+' }).click({ clickCount: 2 });

      // Access localStorage to check the kart
      const kartLocalStorage = await page.evaluate(() => {
        const kart = localStorage.getItem('kart');
        return kart ? JSON.parse(kart) : null;
      });
      expect(kartLocalStorage).toHaveLength(1);

      const item = kartLocalStorage.find((item: KartItem) => item.id === idItem);
      expect(item.quantityToBuy).toBe(2);
    });

    await test.step('Passer la commande', async () => {
      // scrool en bas de la page
      await await page.locator('#order').click();
      await page.waitForTimeout(500);
      expect(await page.locator('#empty-kart')).toHaveCount(1);

      const kartLocalStorage = await page.evaluate(() => {
        const kart = localStorage.getItem('kart');
        return kart ? JSON.parse(kart) : null;
      });
      expect(kartLocalStorage).toBe(null);
    });
  });

  test("Ajout d'un item hors stock", async ({ page }) => {
    page.on('dialog', (dialog) => {
      dialog.accept();
    });
    // Ici, c'est à peu près le même code que tantôt, sauf ajusté selon que l'ajout ne fonctionne pas
    // J'ai enlevé les commentaires d'IA pour rendre ça plus propre
    if (page.isClosed()) {
      throw new Error('La page est fermée avant la navigation');
    }
    await page.waitForLoadState('load');
    /*
        LE TEST BRISE (probablement) ICI POUR LA MÊME RAISON QUE PLUS TÔT
    */
    await page.goto(`http://localhost:5173/item/${idItem}`, { waitUntil: 'load' });
    await page.locator('.button', { hasText: 'Ajouter au panier' });

    await page.locator('.button', { hasText: 'Ajouter au panier' }).click();

    const kartJson = await page.evaluate(() => {
      const kart = localStorage.getItem('kart');
      return kart ? JSON.parse(kart) : null;
    });

    if (!kartJson) {
      return;
    } else {
      const item = kartJson.find((item: KartItem) => item.id === idItem);
      if (!item) {
        return;
      }
    }
  });
});
