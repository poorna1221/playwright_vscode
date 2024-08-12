import {test,expect, APIRequestContext, APIResponse} from '@playwright/test';
import {faker} from '@faker-js/faker';

test('GET TExt', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/contact/");
    //await page.locator("#zak-primary-menu >>text=Contact").click();
   // await expect.soft(page).toHaveTitle("Contact – Practice E Site");

   console.log("POORNA"+await page.locator('.elementor-widget-container h2[class*="elementor-heading-title"]').first().textContent());
})

test('DropDown', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/shop/");
const dropdownn = await page.getByLabel('Shop order');
dropdownn.selectOption("Sort by average rating");
})


test('Iterate', async ({ page }) => {
    await page.goto("https://www.flipkart.com/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&p%5B%5D=facets.discount_range_v1%255B%255D%3D70%2525%2Bor%2Bmore&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&hpid=y-5botjuv2NFyOg7ITCKnap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGbGF0IDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJHVkVGNDUzWVpHWlVIN1ZVIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUm9hZHN0ZXIsIERyZXNzYmVycnkuLi4iXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19");
   
 
    
    const ObjectLinks=await page.locator('div[class="cPHDOP col-12-12"] div div div a');
        const divCount = await ObjectLinks.count();
    for(let i=0;i < divCount;i++){
     if(await ObjectLinks.nth(i).textContent() === '/Printed Chiffon Women Multicol/'){
        
        
        //await page.pause();
       // ObjectLinks.nth(i).click();
       
     }
     
    }
})

test('ALert', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.on('dialog',dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();
    //await page.getByRole('button',{name:'Confirm'}).click();
    await page.waitForTimeout(5000);

    
})
