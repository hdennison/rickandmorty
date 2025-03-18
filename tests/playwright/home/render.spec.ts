import { test, expect } from "@playwright/test";

const pages = [
  {
    name: "/",
    query: "",
    expectedText: "Found 826 characters",
    expectedStatus: "All",
    expectedGender: "All",
  },
  {
    name: "Results by Gender",
    query: "?gender=Male",
    expectedText: "Found 610 characters",
    expectedStatus: "All",
    expectedGender: "Male",
  },
  {
    name: "Results by Status",
    query: "?status=Alive&gender=All",
    expectedText: "Found 439 characters",
    expectedStatus: "Alive",
    expectedGender: "All",
  },
  {
    name: "Results by Gender and Status",
    query: "?gender=Male&status=Dead",
    expectedText: "Found 221 characters",
    expectedStatus: "Dead",
    expectedGender: "Male",
  },
  {
    name: "Results with invalid Status (status=Potato)",
    query: "?gender=Male&status=Potato",
    expectedText: "Found 610 characters",
    expectedStatus: "All",
    expectedGender: "Male",
  },
  {
    name: "Results with invalid Gender (gender=Potato)",
    query: "?gender=Potato&status=Alive",
    expectedText: "Found 439 characters",
    expectedStatus: "Alive",
    expectedGender: "All",
  },
  {
    name: "Results with extra parameters (foo=bar)",
    query: "?gender=Male&status=Alive&foo=bar",
    expectedText: "Found 309 characters",
    expectedStatus: "Alive",
    expectedGender: "Male",
  },
];

const javaScriptEnabledOptions = [true, false];
test.describe("On render", () => {
  javaScriptEnabledOptions.forEach((javaScriptEnabled) => {
    test.describe(
      javaScriptEnabled ? "JavaScript Enabled" : "JavaScript Disabled",
      () => {
        test.use({ javaScriptEnabled });

        pages.forEach(
          ({ name, query, expectedText, expectedStatus, expectedGender }) => {
            test(name, async ({ page }) => {
              await page.goto(`http://localhost:3000/${query}`);
              await page.waitForLoadState("networkidle"); // Ensure the page is fully loaded

              await expect(
                page.getByRole("heading", { name: expectedText })
              ).toBeVisible();

              await expect(page.getByLabel("Status")).toHaveValue(
                expectedStatus
              );
              await expect(page.getByLabel("Gender")).toHaveValue(
                expectedGender
              );
            });
          }
        );
      }
    );
  });
});
