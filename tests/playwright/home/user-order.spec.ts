import { test, expect } from "@playwright/test";

test.describe("Order functionality", () => {
  const tests = [
    { order: "asc", first: "Alien Googah", last: "Numbericon" },
    { order: "desc", first: "Numbericon", last: "Alien Googah" },
    { order: "none", first: "Alien Googah", last: "Boglin" },
  ];

  tests.forEach(({ order, first, last }) => {
    test(`User can order by: ${order}`, async ({ page }) => {
      await page.goto("http://localhost:3000/?status=unknown&gender=unknown");

      const orderSelect = page.getByLabel("Order");
      await orderSelect.selectOption(order);

      const characters = page.locator("ul > li");

      await expect(characters.first()).toContainText(first);
      await expect(characters.last()).toContainText(last);
    });
  });
});
