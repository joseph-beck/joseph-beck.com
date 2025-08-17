import { test, expect } from '@playwright/test';

test.describe('joseph-beck', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title joseph', async ({ page }) => {
    await expect(page).toHaveTitle(/joseph/);
  });
});
