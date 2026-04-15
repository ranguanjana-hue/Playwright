import{test,expect} from '@playwright/test';

//test("dropdown", async ({page}) =>{


  // await page.goto("https://testautomationpractice.blogspot.com/");

   //await page.locator("#country").scrollIntoViewIfNeeded();
   //await page.waitForTimeout(3000);
  // await page.locator("#country").selectOption("india");
  // await page.waitForTimeout(3000);

   //await expect(page.locator("#country")).toHaveValue("india");
    //await page.locator("#country").selectOption({index: 3});
   
   // await page.locator("#country").click();
   // const countryOption=await (await page.locator("#country option").allTextContents()).map(Option => Option.trim());
     //const countryOption=await  page.locator("#country option").all();

     //for(let i=0;i<5;i++){
   //console.log( (await countryOption[i].innerText()).trim());
     //}
//});

test("flipkart dropdown" , async ({page})=>{
   await page.goto("https:/www.flipkart.com/");
   await page .waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("smart");
    await page.waitForTimeout(3000);
    const searchOption =await page .locator("uL>li").all();
     await page.waitForTimeout(3000);
   // for (let i=0; i < searchOption.length; i++){

        //let txt : String=(await searchOption[i].innerText()).trim()
       // console.log(txt);

      //  if(txt === "smart tv"){
          //  searchOption[i].click();
          //  break;
      //  }
   // }
//})
})
