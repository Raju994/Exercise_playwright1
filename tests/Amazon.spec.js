const {test, expect} = require('@playwright/test')


test('Amazon', async ({page})=>{

    //switch to amazon
     await page.goto('https://www.amazon.in/');

     //click on search bar
    await page.click("[type='text']");

    // pass the search word
    await page.fill("[type='text']",'iphone 14');

 //click on search bar
    await page.click("[type='submit']");

})