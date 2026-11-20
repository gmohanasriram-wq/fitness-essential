import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'desktop_1920x1080', width: 1920, height: 1080, category: 'desktop' },
  { name: 'desktop_1600x900', width: 1600, height: 900, category: 'desktop' },
  { name: 'desktop_1440x900', width: 1440, height: 900, category: 'desktop' },
  { name: 'laptop_1366x768', width: 1366, height: 768, category: 'laptop' },
  { name: 'laptop_1280x800', width: 1280, height: 800, category: 'laptop' },
  { name: 'laptop_1024x768', width: 1024, height: 768, category: 'laptop' },
  { name: 'tablet_834x1194', width: 834, height: 1194, category: 'tablet' },
  { name: 'tablet_768x1024', width: 768, height: 1024, category: 'tablet' },
  { name: 'mobile_430x932', width: 430, height: 932, category: 'mobile' },
  { name: 'mobile_414x896', width: 414, height: 896, category: 'mobile' },
  { name: 'mobile_390x844', width: 390, height: 844, category: 'mobile' },
  { name: 'mobile_375x812', width: 375, height: 812, category: 'mobile' },
  { name: 'mobile_360x800', width: 360, height: 800, category: 'mobile' },
  { name: 'mobile_landscape_844x390', width: 844, height: 390, category: 'mobile_landscape' }
];

test.describe('Responsive Design Suite — 14 Viewport Validation', () => {
  viewports.forEach(({ name, width, height, category }) => {
    test(`renders correctly without overflow at ${name} (${width}x${height})`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

      // 1. Verify zero horizontal page overflow
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalOverflow, `Horizontal overflow detected at ${name}`).toBe(false);

      // 2. Verify zero child elements leaking past viewport
      const overflowingElements = await page.evaluate(() => {
        const vw = window.innerWidth;
        const leaks = [];
        for (const el of document.querySelectorAll('*')) {
          const r = el.getBoundingClientRect();
          // allow 2px tolerance for subpixel antialiasing/scrollbars
          if (r.right > vw + 2 || r.left < -2) {
            leaks.push({
              tag: el.tagName,
              className: (el.className || '').toString().slice(0, 50),
              rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) }
            });
          }
        }
        return leaks;
      });
      expect(overflowingElements, `Elements leaking past viewport at ${name}`).toEqual([]);

      // 3. Verify enlarged header logo is visible and maintains responsive sizing
      const headerLogo = page.locator('header img[alt="Fitness Essentials logo"]');
      await expect(headerLogo).toBeVisible();
      const logoBox = await headerLogo.boundingBox();
      expect(logoBox).not.toBeNull();
      if (width >= 1024) {
        expect(Math.round(logoBox.width)).toBe(60);
        expect(Math.round(logoBox.height)).toBe(60);
      } else if (width >= 768) {
        expect(Math.round(logoBox.width)).toBe(54);
        expect(Math.round(logoBox.height)).toBe(54);
      } else {
        expect(Math.round(logoBox.width)).toBe(48);
        expect(Math.round(logoBox.height)).toBe(48);
      }

      // 4. Test Mobile Menu on mobile / tablet viewports
      if (width < 1024) {
        const toggleBtn = page.locator('header button[aria-label="Open menu"]');
        await expect(toggleBtn).toBeVisible();
        const btnBox = await toggleBtn.boundingBox();
        expect(btnBox.width).toBeGreaterThanOrEqual(44);
        expect(btnBox.height).toBeGreaterThanOrEqual(44);

        // Open menu
        await toggleBtn.click();
        const mobileMenu = page.locator('#mobile-menu');
        await expect(mobileMenu).toBeVisible();

        // Verify mobile nav links are visible
        const mobileNavLinks = mobileMenu.locator('a');
        expect(await mobileNavLinks.count()).toBeGreaterThanOrEqual(4);

        // Close menu
        const closeBtn = page.locator('header button[aria-label="Close menu"]');
        await closeBtn.click();
        await expect(mobileMenu).not.toBeVisible();
      }

      // 5. Test Lightbox interactivity on this viewport
      const firstCard = page.locator('button[aria-label="Open concept view for Strength floor"]');
      await firstCard.scrollIntoViewIfNeeded();
      await expect(firstCard).toBeVisible();
      await firstCard.click();

      const lightbox = page.locator('div[role="dialog"]');
      await expect(lightbox).toBeVisible();
      const closeLightboxBtn = lightbox.locator('button[aria-label="Close lightbox"]');
      await expect(closeLightboxBtn).toBeVisible();
      const closeBox = await closeLightboxBtn.boundingBox();
      expect(closeBox.width).toBeGreaterThanOrEqual(44);
      expect(closeBox.height).toBeGreaterThanOrEqual(44);
      await closeLightboxBtn.click();
      await expect(lightbox).not.toBeVisible();

      // Scroll to trigger full page rendering and capture after screenshot
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(150);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(150);

      await page.screenshot({
        path: `test-results/after/${name}.png`,
        fullPage: true
      });
    });
  });
});
