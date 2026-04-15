import{test,expect} from '@playwright/test';
test('herokuapp' ,async({browser})=>{

    const context = await browser.newContext(); //created a browser context
    const page = await context.newPage(); //created a main page

   
    await page.goto('https://the-internet.herokuapp.com/');  //opens main website
    //screenshot
    await page.click ('text=Multiple Windows'); //navigate to windows page
    await expect(page).toHaveURL(/windows/); //validate url
    //screenshot
    const [newPage] =await Promise.all([   //capture new tab
        context.waitForEvent('page'),
        page.click('text=Click Here')

    ]);
})