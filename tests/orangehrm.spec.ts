import{test,expect} from '@playwright/test';
test ('login value',async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill("//input[@name='username']","Admin");
    await page.fill("//input[@name='password']","admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})

