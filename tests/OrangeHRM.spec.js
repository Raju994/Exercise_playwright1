const {test, expect} = require('@playwright/test')


test('OrangeHRM', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //click on username
   await page.click("[name='username']");
    //enter username
    await page.fill("[name='username']",'Admin');
    //click on password
    await page.click("[name='password']");
    //enter password
    await page.fill("[name='password']",'admin123');
    //click on login
    await page.click("[type='submit']");
})