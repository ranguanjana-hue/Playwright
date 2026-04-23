import{test,expect} from '@playwright/test';

test("Alerts", async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

    page.once('dialog', async (dialog) =>{


    })


})

