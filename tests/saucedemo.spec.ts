import{test,expect} from '@playwright/test';

test('searchproduct', async({page})=> { 

   
await page.goto("https://www.saucedemo.com/") ;

await page.fill("#user-name","standard_user");

await page.fill("#password","secret_sauce");

await page.click("#login-button");

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

const products =await page.locator('.inventory_item_name ').allTextContents();//get all product names
console.log(products);

const products =await page.locator('.inventory_item_name ').allTextContents();
expect(products).toContain('sauce labs Backpack');









   

})