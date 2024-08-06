import {test,expect, APIRequestContext, APIResponse} from '@playwright/test';
import apiController from '../controller/api.controller';

test.describe('contact', () => {
    let randomPerson:APIResponse;
test.beforeAll(async () => {
   
    randomPerson :await apiController.getUsers();
    console.log("controller"+randomPerson);


    const newUserToDo = await apiController.createUser();
    console.log("newUserToDo"+newUserToDo);
});


test('Contact', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await page.locator("#zak-primary-menu >>text=Contact").click();
   // await expect.soft(page).toHaveTitle("Contact – Practice E Site");
await page.locator('div[class="evf-field evf-field-first-name form-row contact-name validate-required"] input').fill(randomPerson['name']);
await page.locator('input[type="email"]').fill(randomPerson['email']);
await page.locator("#evf-277-field_66FR384cge-3").fill(randomPerson['phone']);
await page.locator("#evf-277-field_yhGx3FOwr2-4").fill(randomPerson['website']);
await page.waitForTimeout(3000);
expect(test.info().errors.length).toBeLessThan(1);
await page.getByRole("button",{name:"Submit"}).click();

await expect(page.getByText(/Thanks for contacting us! We will be in touch with you shortl/)).toBeVisible();
 
})

})
