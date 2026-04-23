import  { test, expect } from "@playwright/test";

test("windowhandling" ,async({page})=>{
     test.setTimeout(180000);
    await page.goto("https://demoqa.com/browser-windows");
      

    const popupPromise = page.waitForEvent("popup");
    await page.locator("#tabButton").click();
    const popup =await popupPromise;
    
    await popup.waitForLoadState();

    expect (popup.url()).toContain("sample");
    const heading = popup.locator("h1");
    await expect (heading).toBeVisible();

    const text= await heading.textContent();
    console.log("New tab opened.Heading:",text);
      
    await page.waitForTimeout(3000);
    await popup.close();
    await page.waitForTimeout(3000);
}) 

test('windowhandling2' ,async({page})=>{

     test.setTimeout(180000);
    page.goto("https://demoqa.com/browser-windows");

    const popupPromise=  page.waitForEvent("popup");
     await page.locator("#windowButton").click();
     const popup =await popupPromise;

      await popup.waitForLoadState();
      expect(popup.url()).toContain("sample");
      const heading =popup.locator("h1");
      await expect (heading).toBeVisible();

      const text= await heading.textContent();
       console.log("New window opened.Heading:",text);

     await page.waitForTimeout(3000);
    await popup.close();
    await page.waitForTimeout(3000);

})


