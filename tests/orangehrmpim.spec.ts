import{test,expect} from '@playwright/test';
 test ("jobtitle", async ({page})=>{

     await page .goto("https://opensource-demo.orangehrmlive.com/");
     await page.fill('//input[@ name ="username"]', "Admin" ) ;
     await page.fill('//input[@ name ="password"]' , "admin123");
     await page.click('button[ type ="submit"]');
     
     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
     await page.locator("//span[text()='PIM']") .click();
     await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");

     await page.getByText('job Title').click();

    await page.locator("div[role='option']",{hasText: "Automation Tester"}) .click();
    
 })