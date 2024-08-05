import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config:FullConfig){

const browser= await chromium.launch();
const page= await browser.newPage();



await page.goto("https://practice.sdetunicorns.com/my-account/");

await page.context().storageState({path:'notLoggedInState.json'});

await page.waitForTimeout(5000);

await page.locator('#username').fill('poorna1221');
await page.locator('#password').fill('Poorna@5678');
await page.locator('[value="Log in"]').click();

//above is signed in state & below I will save my signed in state to loggedIInState.json

await page.context().storageState({path:'loggedInState.json'});
await browser.close();
}

export default globalSetup;