import {test,expect} from '@playwright/test';
test.describe('Account 1',()=>{
test('downloads',async({page})=>{
    await page.goto('/my-account');
await page.locator('li a[href*="downloads"]').click();
await expect(page).toHaveURL(/.*downloads/);
})

test('orders',async({page})=>{
    await page.goto('/my-account');
await page.locator('li a[href*="orders"]').click();
await expect(page).toHaveURL(/.*orders/);

})

test.describe('Account page',()=>{
test.use({storageState:'notLoggedInState.json'})
test('register',async({page})=>{
    await page.goto('/my-account');
await expect(page.locator('form[class*="login"]')).toBeVisible();
})
})
})

