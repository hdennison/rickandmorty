import { test, expect } from "@playwright/test";

const pages = [
  {
    name: "/",
    query: "",
    expectedText: "Found 826 characters",
    expectedStatus: "All",
  },
  {
    name: "Results by Status",
    query: "?status=Alive",
    expectedText: "Found 439 characters",
    expectedStatus: "Alive",
  },
  {
    name: "Results with invalid Status (status=Potato)",
    query: "?status=Potato",
    expectedText: "Found 826 characters",
    expectedStatus: "All",
  },
  {
    name: "Results with extra parameters (foo=bar)",
    query: "?status=Alive&foo=bar",
    expectedText: "Found 439 characters",
    expectedStatus: "Alive",
  },
];

const javaScriptEnabledOptions = [true, false];

test.describe("On render", () => {
  javaScriptEnabledOptions.forEach((javaScriptEnabled) => {
    test.describe(
      javaScriptEnabled ? "JavaScript Enabled" : "JavaScript Disabled",
      () => {
        test.use({ javaScriptEnabled });

        pages.forEach(({ name, query, expectedText, expectedStatus }) => {
          test(name, async ({ page }) => {
            await page.goto(`http://localhost:3000/${query}`);

            await page.waitForLoadState("networkidle"); // Ensure the page is fully loaded

            await expect(
              page.getByRole("heading", { name: expectedText })
            ).toBeVisible();

            await expect(page.getByLabel("Status")).toHaveValue(expectedStatus);
          });
        });
      }
    );
  });
});
