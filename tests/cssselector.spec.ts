import{test, expect} from '@playwright/test';
test ('css locators' ,async ({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('[placeholder="Username"]').fill("Admin");
    await page.locator("input[placeholder$='d']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.locator("a[href*='admin']").click();
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
    await page.locator("a[href*='viewPim']").click();
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    await page.locator("a[href*='viewLeave']").click();
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");
    await page.locator("a[href*='viewTime']").click();
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet");
    await page.locator("a[href*='viewRecruit']").click();
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates");

});
  