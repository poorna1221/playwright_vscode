import {test,expect} from '@playwright/test';
import {faker} from '@faker-js/faker';
test.skip('FirstTest',async({page})=>{

    await page.goto("https://practice.sdetunicorns.com/");
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    //await page.getByRole("link",{name:"About"}).click();
    
    await page.getByRole('link', { name: 'About' }).first().click();
    await page.waitForTimeout(3_000);
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
})

test.skip('HomePageClick', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    //await page.locator("#zak-primary-menu >>text=Home").click();
    //await page.locator('#zak-primary-menu:has-text("Home")').click();
    const actualLinks = page.locator('#zak-primary-menu li');
    const expectedLinks=[
        "Home",
        "About",
        "Shop",
       "Blog",
      "Contact",
      "My account",
    ];
    expect(await actualLinks.allTextContents()).toEqual(expectedLinks);

    for (const ele of await actualLinks.elementHandles()) {
        console.log(await ele.textContent())
    }
})

test('Contact', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await page.locator("#zak-primary-menu >>text=Contact").click();
   // await expect.soft(page).toHaveTitle("Contact – Practice E Site");
await page.locator('div[class="evf-field evf-field-first-name form-row contact-name validate-required"] input').fill(faker.person.firstName());
await page.locator('input[type="email"]').fill(faker.internet.email());
await page.locator("#evf-277-field_66FR384cge-3").fill(faker.phone.number());
await page.locator("#evf-277-field_yhGx3FOwr2-4").fill(faker.lorem.paragraph());
await page.waitForTimeout(3000);
expect(test.info().errors.length).toBeLessThan(1);
await page.getByRole("button",{name:"Submit"}).click();

await expect(page.getByText(/Thanks for contacting us! We will be in touch with you shortl/)).toBeVisible();
 
})


