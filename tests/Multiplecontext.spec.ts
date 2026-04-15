import{chromium} from '@playwright/test';
import{test} from '@playwright/test';

test('Multiplecontext' ,async()=>{
    const browser = await chromium.launch();

    const context1 =await browser.newContext();
    const page1 = await context1.newPage();

    const  context2 =await browser.newContext();
    const page2 =await context2.newPage();

    await page1.goto ('https://www.google.com');
    await page2.goto('https://www.amazon.in/');

    await browser.close();

    

});