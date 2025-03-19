import { test, expect } from "@playwright/test";

const javaScriptEnabledOptions = [true, false];

javaScriptEnabledOptions.forEach((javaScriptEnabled) => {
  test.describe(
    javaScriptEnabled ? "JavaScript Enabled" : "JavaScript Disabled",
    () => {
      test.use({ javaScriptEnabled });

      test("User can navigate to Character profile page", async ({ page }) => {
        await page.goto("http://localhost:3000/");

        const firstCard = page.locator("ul > li").first();
        const link = firstCard.getByRole("link");

        await link.click();

        await page.waitForLoadState("networkidle");

        await expect(page).toHaveURL("http://localhost:3000/character/1");
      });
    }
  );
});
