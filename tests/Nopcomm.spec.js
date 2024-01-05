const {test, expect} = require('@playwright/test')

test("Nop", async({page})=>{
//switch to nop page
await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');

//checkbox
await page.check("[type='checkbox']");

//click on login
await page.click("[type='submit']");

//validate url
await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');

//validate title
await expect(page).toHaveTitle('Dashboard / nopCommerce administration');

//click on logout
await page.click();

})