import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    //switch to website
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  //click on regiter
  await page.getByRole('link', { name: 'Register' }).click();
  //click on firstname
  await page.locator('[id="customer\\.firstName"]').click();
  //enter firstname
  await page.locator('[id="customer\\.firstName"]').fill('T');
  //click on tab to move to next
  await page.locator('[id="customer\\.firstName"]').press('Tab');
  //enter lastname
  await page.locator('[id="customer\\.lastName"]').fill('Test');
  //click on tab to move to next
  await page.locator('[id="customer\\.lastName"]').press('Tab');
  //enter street
  await page.locator('[id="customer\\.address\\.street"]').fill('India');
  //click on tab to move to next
  await page.locator('[id="customer\\.address\\.street"]').press('Tab');
  //enter city name
  await page.locator('[id="customer\\.address\\.city"]').fill('Ts');
  //click on tab to move to next
  await page.locator('[id="customer\\.address\\.city"]').press('Tab');
  //enter state
  await page.locator('[id="customer\\.address\\.state"]').fill('TS');
  //click on tab to move to next
  await page.locator('[id="customer\\.address\\.state"]').press('Tab');
  //enter zipcode
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('000');
  //click on tab to move to next
  await page.locator('[id="customer\\.address\\.zipCode"]').press('Tab');
  //enter cell
  await page.locator('[id="customer\\.phoneNumber"]').fill('000000000');
  await page.locator('[id="customer\\.phoneNumber"]').press('Tab');
  //enter ssn
  await page.locator('[id="customer\\.ssn"]').fill('00');
  //click on tab to move to next
  await page.locator('[id="customer\\.ssn"]').press('Tab');
  //enter username
  await page.locator('[id="customer\\.username"]').fill('Test@3');
  //click on tab to move to next
  await page.locator('[id="customer\\.username"]').press('Tab');
  //enter password
  await page.locator('[id="customer\\.password"]').fill('Test@3');
  //click on tab to move to next
  await page.locator('[id="customer\\.password"]').press('Tab');
  //renter password
  await page.locator('#repeatedPassword').fill('Test@3');
  //click on register button
  await page.getByRole('button', { name: 'Register' }).click();
  //click on logout
  await page.getByRole('link', { name: 'Log Out' }).click();
 
})