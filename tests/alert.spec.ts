import { test,expect} from  '@playwright/test';

test ("Alert test", async ({page})=> {
await page.goto("https://demoqa.com/alerts");

  page.once("dialog", async (dialog) =>{
      console.log(dialog.message());
      console.log (dialog.type());
      
      expect(dialog.type()).toBe("alert");
       await dialog.accept();

  });

  await page.waitForTimeout(3000);
  await page.locator("#alertButton").click();
  await page.waitForTimeout(3000);
  console.log("Alert handled successfully");
})

test("confirmation" ,async({page}) =>{
    await page.goto("https://demoqa.com/alerts");

    page.once("dialog" ,async(dialog) =>{
        console.log(dialog.message());
        console.log(dialog.type());

        expect (dialog.type()).toBe("confirm");
        await dialog.dismiss();
    });
    await page.waitForTimeout(3000);
    await page.locator("#confirmButton").click();
    await page.waitForTimeout(3000);
      console.log("Alert handled successfully");
})

test('alert button', async ({page})=>{
      await page.goto("https://demoqa.com/alerts");

    page.once('dialog', async(dialog)=>{
        console.log(dialog.message());
        console.log(dialog.type());
       expect (dialog.type()).toBe("alert")
       await dialog.dismiss();
    });

     await page.locator("#timerAlertButton").click();
     console.log("Alert handled successfully");


})

test('prompt' ,async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.once('dialog',async(dialog)=>{
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toBe("prompt")
        await dialog.accept("play");
    
    })
    await page.locator("#promtButton").click();
    console.log("Alert handled successfully");

 await expect(page.locator("#promptResult")).toContainText(" You entered Play")
    console.log("prompt alert handled successfully");
})
