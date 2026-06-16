
import {test, expect} from '@playwright/test'

test.describe('',()=>{

  test.only('TC1:Click, Double Click, Hover, Tooltip, Static Dropdown',async({page})=>{

    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

    await page.getByTestId('single-click-btn').click()
    await expect(page.getByText('Single click completed.')).toBeVisible()
    await expect(page.getByTestId('single-click-status')).toContainText('Single click completed.')

    await page.getByTestId('double-click-btn').dblclick()
    await expect(page.getByText('Double click completed.')).toBeVisible()
    await expect(page.getByTestId('double-click-status')).toContainText('Double click completed.')
    await page.getByTestId('hover-btn').hover()
    await page.pause()
    await expect(page.getByText('Hover triggered successfully.')).toBeVisible()
    await expect(page.getByTestId('hover-status')).toContainText('Hover triggered successfully.')

    await page.getByTestId('tooltip-trigger-btn').hover()
  
    await expect(page.getByTestId('hover-tooltip')).toContainText('Tooltip verified')
    
      await expect(page.getByTestId('hover-tooltip-status')).toBeVisible()
  })

  test ('TC2:Inputs, Checkbox, Radio, Dropdown',async({page})=>{

    const name = 'Tester'
    const email = 'Tester@gmail.com'
    const track = 'Playwright Core'

    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')
    await page.getByTestId('name-input').type(name)
    await page.getByTestId('email-input').type(email)
    await page.getByTestId('track-select').selectOption(track)
    await page.getByTestId('remember-checkbox').check()
    await page.getByTestId('mode-api-radio').check()
    await page.getByTestId('submit-form-btn').click()

    await expect(page.getByText(`Form:${name} submitted (${email}) for ${track}.`)).toBeVisible()

  })

  test ('TC3:Static Waits, Keyboard',async({page})=>{

    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

    await page.getByTestId('async-load-btn').click()
    await expect(page.getByText('Async:Async result loaded successfully.')).toBeVisible({timeout:30000})

    await page.getByTestId('keyboard-input').fill('Tester')
    await page.getByTestId('keyboard-input').press('Enter')
    await expect(page.getByText('Keyboard:Command submitted: Tester')).toBeVisible()


  })

  test ('TC4:Text and Attribute Extraction',async({page})=>{

     await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

    const innerText = await page.getByTestId('extract-textcontent-target').innerText()
    console.log('InnerText is :'  + innerText);
    const textContains = await page.getByTestId('extract-textcontent-target').textContent()
    console.log('textContains is: '  + textContains);
    


    const innerValue = await page.getByTestId('extract-inputvalue-target').inputValue()
    console.log('InnerValue is :' + innerValue);
    
    const attriValue = await page.getByTestId('extract-attribute-target').getAttribute('data-track')
    console.log('Attribute Value is:' + attriValue);
    
    const allInnerText = await page.getByTestId('extract-list-item').allInnerTexts()
    console.log('allInnerText is'  + allInnerText);

    const alltextcon = await page.getByTestId('extract-list-item').allTextContents()
    console.log('alltextcon' + alltextcon);
     


  })

})