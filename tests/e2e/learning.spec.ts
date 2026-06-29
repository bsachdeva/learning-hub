import { test, expect } from "@playwright/test";

test("search and enroll in course", async ({ page }) => {
  await page.goto("/courses");
  await page.getByPlaceholder("Search topics").fill("React");
  await page.getByRole("button", { name: /Enroll/i }).first().click();
  await expect(page.getByText(/Enrolled successfully/i)).toBeVisible();
});
