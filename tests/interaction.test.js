import { test, expect } from '@playwright/test';

test.describe('Fitness Essentials Interactive QA', () => {
  test('Equipment card opens Lightbox with image and caption, navigable and closeable', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Click on the first Equipment card ("Strength floor")
    const strengthCard = page.locator('button[aria-label="Open concept view for Strength floor"]');
    await expect(strengthCard).toBeVisible();
    await strengthCard.click();

    // Check lightbox modal is open
    const lightbox = page.locator('div[role="dialog"]');
    await expect(lightbox).toBeVisible();

    // Verify caption
    const figcaption = lightbox.locator('figcaption');
    await expect(figcaption).toContainText('Strength floor · Concept Environment');

    // Verify image is loaded in lightbox
    const lightboxImg = lightbox.locator('img');
    await expect(lightboxImg).toHaveAttribute('src', /strength-concept\.jpg/);

    // Navigate to next item
    const nextBtn = lightbox.locator('button[aria-label="Next image"]');
    await nextBtn.click();
    await expect(figcaption).toContainText('Free weights · Concept Environment');

    // Close lightbox using escape key
    await page.keyboard.press('Escape');
    await expect(lightbox).not.toBeVisible();
  });

  test('Gallery card opens Lightbox with correct concept image and caption', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Click on the "Floor — overhead" gallery item (item 4)
    const overheadCard = page.locator('button[aria-label="Open detail for Floor — overhead"]');
    await expect(overheadCard).toBeVisible();
    await overheadCard.click();

    // Check lightbox modal is open
    const lightbox = page.locator('div[role="dialog"]');
    await expect(lightbox).toBeVisible();

    // Verify caption and image
    const figcaption = lightbox.locator('figcaption');
    await expect(figcaption).toContainText('Floor — overhead · Concept Environment');
    const lightboxImg = lightbox.locator('img');
    await expect(lightboxImg).toHaveAttribute('src', /04-floor-overhead\.jpg/);

    // Close using close button
    const closeBtn = lightbox.locator('button[aria-label="Close lightbox"]');
    await closeBtn.click();
    await expect(lightbox).not.toBeVisible();
  });

  test('All intended images are rendered without empty placeholders or broken sources', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Verify Hero image
    const heroImg = page.locator('main section:first-child img[alt*="Fitness"]');
    await expect(heroImg.first()).toBeVisible();

    // Verify Experience image
    const expImg = page.locator('#experience img[alt*="floor"]');
    await expect(expImg).toBeVisible();

    // Verify 4 Equipment images
    const equipImgs = page.locator('#equipment button img');
    await expect(equipImgs).toHaveCount(4);

    // Verify 8 Gallery images
    const galleryImgs = page.locator('#gallery button img');
    await expect(galleryImgs).toHaveCount(8);

    // Check that there is no remaining fallback text like "IMAGE 01", "IMAGE 02" anywhere
    const pageText = await page.locator('main').innerText();
    expect(pageText).not.toContain('IMAGE 01');
    expect(pageText).not.toContain('IMAGE 02');
    expect(pageText).not.toContain('IMAGE 03');
    expect(pageText).not.toContain('IMAGE 04');
  });
});
