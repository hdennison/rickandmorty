import { test, expect } from "@playwright/test";

test.describe("Search functionality", () => {
  const javaScriptEnabledOptions = [true, false];

  javaScriptEnabledOptions.forEach((javaScriptEnabled) => {
    test.describe(
      javaScriptEnabled ? "JavaScript Enabled" : "JavaScript Disabled",
      () => {
        test.use({ javaScriptEnabled });

        test("User can search", async ({ page }) => {
          await page.goto("http://localhost:3000");

          await expect(
            page.getByRole("heading", { name: "Found 826 characters" })
          ).toBeVisible();

          await expect(page.getByLabel("Status")).toHaveValue("All");

          await page.getByLabel("Status").selectOption("Dead");

          await page.getByRole("button", { name: "Search" }).click();

          await expect(
            page.getByRole("heading", { name: "Found 287 characters" })
          ).toBeVisible();

          const characters = page.locator("ul > li");
          await expect(characters.first()).toContainText("Adjudicator Rick");
          await expect(page.getByLabel("Status")).toHaveValue("Dead");

          await expect(page).toHaveURL(/status=Dead/);
        });
      }
    );
  });
});
