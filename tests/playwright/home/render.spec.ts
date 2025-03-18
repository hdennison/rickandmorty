import { test, expect } from "@playwright/test";

const javaScriptEnabledOptions = [true, false];

test.describe("On render", () => {
  javaScriptEnabledOptions.forEach((javaScriptEnabled) => {
    test.describe(
      javaScriptEnabled ? "JavaScript Enabled" : "JavaScript Disabled",
      () => {
        test.use({ javaScriptEnabled });

        test("shows list of characters", async ({ page }) => {
          await page.goto("http://localhost:3000/");

          await expect(
            page.getByRole("heading", { name: "Found 826 characters" })
          ).toBeVisible();

          const characters = page.locator("ul > li");

          await expect(characters).toHaveCount(20);
          await expect(characters.first()).toHaveText("Rick Sanchez");
        });
      }
    );
  });
});
