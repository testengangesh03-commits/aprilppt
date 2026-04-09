import {test} from '@playwright/test';

test('login',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.fill("#username","rahulshettyacademy");
    await page.fill("#password","Learning@830$3mK2");
    // await page.click("[value='admin']");
    // await page.click("#okayBtn");
    await page.click("#signInBtn");





})