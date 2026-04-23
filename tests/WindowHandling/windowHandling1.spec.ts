import {test,expect} from "@playwright/test";

test('windowHandlingAutomation', async({page})=>{
    
    test .setTimeout(18000);
   await page.goto("https://testautomationpractice.blogspot.com/");

    const popupPromise= page.waitForEvent("popup")
    await page.locator("//button[text()='New Tab']").click();
    const popup=await popupPromise;
    
    
     expect (popup.url()).toContain ("pavantestingtools");
     const heading =popup.locator("//h1");
      await expect (heading).toBeVisible();

       const text= await heading.textContent();
       console.log("New window opened.Heading:",text);

     await page.waitForTimeout(3000);
    await popup.close();
    await page.waitForTimeout(3000);

    

})

test('windowhandling2' , async({page})=>{

    test.setTimeout(18000);
    page.goto("https://testautomationpractice.blogspot.com/");

     const popupPromise= page.waitForEvent("popup");
     await page.locator("#PopUp").click();
     const popup=await (popupPromise);

    await popup.waitForLoadState();
     expect(popup.url()).toContain("selenium");
      const heading =popup.locator("//h1");
         await expect (heading).toBeVisible();

         const text= await heading.textContent();
       console.log("New window opened.Heading:",text);

     await page.waitForTimeout(3000);
    await popup.close();
    await page.waitForTimeout(3000);
});






