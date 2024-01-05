const {test, expect} = require('@playwright/test')


test('nopcomm verify application title', async ({page})=>{

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    await expect(page).toHaveTitle("Your store. Login");

})