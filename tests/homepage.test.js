import { test, expect } from '@playwright/test';

test.describe('Fitness Essentials Homepage', () => {
  test('logos are present and correct', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check logo image in navigation (header)
    const headerLogoImg = page.locator('header img[alt="Fitness Essentials logo"]');
    await expect(headerLogoImg).toBeVisible();
    await expect(headerLogoImg).toHaveAttribute('src', /fitness-essentials-logo\.png/);

    // Check logo image in footer
    const footerLogoImg = page.locator('footer img[alt="Fitness Essentials logo"]');
    await expect(footerLogoImg).toBeVisible();
    await expect(footerLogoImg).toHaveAttribute('src', /fitness-essentials-logo\.png/);

    // Check logo image in hero section
    const heroLogoImg = page.locator('main img[alt="Fitness Essentials logo"]');
    await expect(heroLogoImg).toBeVisible();
    await expect(heroLogoImg).toHaveAttribute('src', /fitness-essentials-logo\.png/);
  });

  test('accent color is set to red', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Get the computed style of an element that uses the accent color
    // For example, the hover color of nav links or the accent gradient
    // We can check the body's background or an element that uses --color-accent
    // Let's check the accent color via the CSS variable on the root element
    const root = page.locator(':root');
    const accentColor = await root.evaluate(el => {
      return getComputedStyle(el).getPropertyValue('--color-accent').trim();
    });
    expect(accentColor).toBe('#dc2626'); // hex for --color-accent
  });

  test('no horizontal overflow', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check that there's no horizontal overflow by comparing scrollWidth to clientWidth
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('navigation links are present', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Target desktop navigation links only - these have the text-label class
    const navLinks = page.locator('nav a.text-label');
    await expect(navLinks).toHaveCount(4); // Experience, Equipment, Gallery, Location

    // Check each link text
    await expect(navLinks.nth(0)).toHaveText('Experience');
    await expect(navLinks.nth(1)).toHaveText('Equipment');
    await expect(navLinks.nth(2)).toHaveText('Gallery');
    await expect(navLinks.nth(3)).toHaveText('Location');
  });

  test('hero section has correct text', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check the hero headline text
    const heroHeadline = page.locator('main h1');
    await expect(heroHeadline).toBeVisible();

    // The hero headline is split into spans, but we can get the full text
    const headlineText = await heroHeadline.textContent();
    expect(headlineText).toContain('FITNESS');
    expect(headlineText).toContain('ESSENTIALS');
    expect(headlineText).toContain('TRAIN WITH PURPOSE.');
  });
});
