import { test, expect } from "@playwright/test";

test.describe("On render", () => {
  test.describe("with VALID id param", () => {
    test("shows Character details", async ({ page }) => {
      await page.goto("http://localhost:3000/character/1");

      await expect(
        page.getByRole("heading", { name: "Rick Sanchez", level: 1 })
      ).toBeVisible();

      const image = page.getByAltText("Rick Sanchez");

      await expect(image).toBeVisible();

      await expect(page).toHaveTitle("Rick Sanchez - Rick and Morty");
    });
  });
  test.describe("with NO id param", () => {
    test("shows 'Not found Page'", async ({ page }) => {
      await page.goto("http://localhost:3000/character");

      await expect(
        page.getByRole("heading", { name: "Page not found!" })
      ).toBeVisible();
    });
  });

  test.describe("with INVALID id param", () => {
    test("shows 'Character not found page'", async ({ page }) => {
      await page.goto("http://localhost:3000/character/a");

      await expect(
        page.getByRole("heading", { name: "Character not found!" })
      ).toBeVisible();
    });
  });
});
