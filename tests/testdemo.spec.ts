import{test,expect} from '@playwright/test';

test('basic navigation test', async ({page})=>{

    await page.goto('https://playwright.dev/');

    const title = await page.title(); 

    console.log('Title:',title);

    await expect(title).toContain("Fast and reliable end-to-end testing for modern web apps | Playwright");
}
)
