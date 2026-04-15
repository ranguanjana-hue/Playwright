import{test,expect} from '@playwright/test';
test ('login value',async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
    await page.locator('//a[@class="oxd-main-menu-item active"]')
    await page.locator(("//div[contains(@class,'orangehrm-edit-employee')]//descendant::button[@type='submit']")[1])
})