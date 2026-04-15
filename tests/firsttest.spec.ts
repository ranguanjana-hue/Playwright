import {test,expect } from '@playwright/test';
test ('verify Github homepage Title', async ({page})=>{
    await page.goto("https://github.com/");
    const title =await page.title();
    console.log ('GitHub Title:',title);
    await expect (title).toContain('GitHub');
    
}

)