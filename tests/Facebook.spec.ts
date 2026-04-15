import{test,expect} from '@playwright/test';
test ('error values',async({page}) =>{
    await page.goto('https://www.facebook.com/');
    await page.fill("//input[@name='email']","abcdefgh");
    await page.fill("//input[@name='pass']","1234");
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page).toHaveURL(/facebook.com/);
    

})
