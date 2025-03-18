import { test, expect } from "@playwright/test";

const javaScriptEnabledOptions = [true, false];

javaScriptEnabledOptions.forEach((javaScriptEnabled) => {
  test.describe(
    javaScriptEnabled ? "JavaScript Enabled" : "JavaScript Disabled",
    () => {
      test.use({ javaScriptEnabled });

      test("User can navigate to Character profile page", async ({ page }) => {
        await page.goto("http://localhost:3000/");

        await page.getByRole("link", { name: "Rick Sanchez" }).click();

        await page.waitForLoadState("networkidle");

        await expect(page).toHaveURL("http://localhost:3000/character/1");
      });
    }
  );
});
