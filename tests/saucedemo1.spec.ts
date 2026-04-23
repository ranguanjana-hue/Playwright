import{test,expect} from '@playwright/test';

test('searchproduct', async({page})=> { 

   
await page.goto("https://www.saucedemo.com/") ;

await page.fill("#user-name","standard_user");

await page.fill("#password","secret_sauce");

await page.click("#login-button");

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await page.locator('//option [@value="lohi"]');
const products =await page.locator('//div[contains(text(),"Sauce Labs Backpack")]').allTextContents();
console.log(products);
await expect(page.locator('.inventory_item_name',{hasText:'sauce labs Backpack'} )).toBeVisible()
// verify products are sorted correctly
})