import { test, expect } from '@playwright/test';

test.describe('Visual QA for Fitness Essentials Homepage', () => {
  const viewports = [
    { name: 'desktop_1440x900', width: 1440, height: 900 },
    { name: 'desktop_1280x800', width: 1280, height: 800 },
    { name: 'tablet_768x1024', width: 768, height: 1024 },
    { name: 'mobile_430x932', width: 430, height: 932 },
    { name: 'mobile_390x844', width: 390, height: 844 },
    { name: 'mobile_375x812', width: 375, height: 812 }
  ];

  test.beforeEach(async ({ page }) => {
    // Disable animations for consistent screenshots
    await page.addStyleTag({ content: '* { animation-duration: 0.001s !important; transition-duration: 0.001s !important; }' });
  });

  viewports.forEach(({ name, width, height }) => {
    test(`should render correctly at ${name} (${width}x${height})`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

      // Check for horizontal overflow
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalOverflow).toBe(false, `Horizontal overflow detected at ${name}`);

      // Check for console errors
      const consoleErrors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      await page.waitForTimeout(500); // Give time for any console errors to appear
      expect(consoleErrors).toEqual([], `Console errors found at ${name}: ${consoleErrors.join(', ')}`);

      // Trigger in-view animations for full-page screenshot
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(300);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);

      // Take a full page screenshot
      await page.screenshot({ path: `test-results/screenshots/${name}.png`, fullPage: true });

      // Logo in header (always visible)
      const headerLogo = page.locator('header img[alt="Fitness Essentials logo"]');
      await expect(headerLogo).toBeVisible();

      // Logo in footer (always visible)
      const footerLogo = page.locator('footer img[alt="Fitness Essentials logo"]');
      await expect(footerLogo).toBeVisible();

      // Check the hero section visual treatment (right side)
      // Structure: section > div.container > div.left-side + div.right-side
      const heroVisualTreatment = page.locator('main section:first-child > div > div:nth-child(2)');
      await expect(heroVisualTreatment).toBeVisible();

      // Inside the visual treatment, check for the Fitness Essentials logo badge on tablet/desktop
      if (width >= 768) {
        const heroLogo = heroVisualTreatment.locator('img[alt="Fitness Essentials logo"]');
        await expect(heroLogo).toBeVisible();
      }

      // Check that the CTAs are visible (they are in the HeroAnimation, which is the left side)
      const heroTypoSection = page.locator('main section:first-child > div > div:nth-child(1)');
      const primaryCta = heroTypoSection.locator('a:has-text("Visit the facility")');
      await expect(primaryCta).toBeVisible();
      const secondaryCta = heroTypoSection.locator('a:has-text("See the space")');
      await expect(secondaryCta).toBeVisible();
    });
  });
});
