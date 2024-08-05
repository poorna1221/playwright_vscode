import {test,expect} from '@playwright/test';
import { TIMEOUT } from 'dns';
import path from 'path';

test.beforeEach(async ({ page }) => {
    await page.goto('/cart');
})

test('upload file', async ({ page }) => {
    
const filePath=path.join(__dirname,'/data/Dice.jpg');
await page.setInputFiles("#upfile_1",filePath);
await page.locator("#upload_1").click();
await expect(page.locator("#wfu_messageblock_header_1_label_1")).toContainText('uploaded successfully');
 
})

const fileName=['Dice.jpg','Dice1.jpg']

for(const name of fileName){
test(`upload file with dom manipulation when input field is not interactable ${name}`, async ({ page }) => {
   
    await page.waitForTimeout(5000);
const filePath=path.join(__dirname,`/data/${name}`);
//page.pause();

//await page.evaluate(()=>{

  //  const selector=document.querySelector('upfile_1');
  //  if(selector){
  //      selector.className='';
  //  }
//})

await page.setInputFiles("#upfile_1",filePath);
await page.locator("#upload_1").click();

await page.locator("#wfu_messageblock_header_1_label_1").waitFor({state:'visible',timeout:10000});

await expect(page.locator("#wfu_messageblock_header_1_label_1")).toContainText('uploaded successfully',{timeout:10000});
 
})
}
