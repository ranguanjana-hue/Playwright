import {test,expect} from "@playwright/test";


test("verify page title",async ({page})=>{

   await page.goto(" https://sauce-demo.myshopify.com/");

   let title:string=await page.title();
   console.log("Tile:",title);

   await expect(page).toHaveTitle("Sauce Demo");

});