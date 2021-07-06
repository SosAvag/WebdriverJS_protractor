const { protractor, browser, element, by } = require("protractor");
const baseUrl ="https://www.epam.com/";

const EC = protractor.ExpectedConditions;

describe("testing epam.com webpage",  () =>{
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('should open homepage', async ()=>{
        await browser.get(baseUrl);
        const narrow = element(by.css(".background-video__container"))
        expect(await narrow.isDisplayed()).toBe(true);
    })

    xit('should hover on about navigation button and click on history button', async () => {
        const aboutButton = element(by.css(".top-navigation__item-link[href='/about']"));
        await browser.actions().mouseMove(aboutButton).perform();
        //browser.sleep(3000);
        const historyButton = element(by.css(".top-navigation__sub-link[href='/about/who-we-are/history']"));
        expect(await historyButton.isDisplayed()).toBe(true);
        await browser.sleep(3000);
        await element(by.css(".top-navigation__sub-link[href='/about/who-we-are/history']")).click();
        const titleOfHistorySection = element(by.css("h1"));
        expect(await titleOfHistorySection.isDisplayed()).toBe(true);
    });

    it('should click on careers button on navigation bar', async () => {
        const careersButton = element(by.css(".top-navigation__item-link[href='/careers']"));
        await careersButton.click();
        const searchField = element(by.id("jobSearchFilterForm"));
        await searchField.isDisplayed();
    });

    it('should fill in search section', async () => {
        const keywordField =  element(by.id("new_form_job_search_1445745853_copy-keyword"));
        await keywordField.click();
        await keywordField.sendKeys('QA');
        await browser.sleep(3000);
        const firstFromDropdown = element(by.css(".autocomplete-suggestion[data-index='0']"));
        await firstFromDropdown.isDisplayed();
        await firstFromDropdown.click();
        const choseLocation = element(by.css('.select2-selection__arrow'));
        await choseLocation.isDisplayed();
        await choseLocation.click();
        const locationCanada = element(by.css("[aria-label='Canada']"));
        await locationCanada.isDisplayed();
        await locationCanada.click();
        const allCitiesCanada = element(by.xpath("//li[@title='All Cities in Canada']"));
        await allCitiesCanada.isDisplayed();
        await allCitiesCanada.click();
        const findButton = element(by.css(".recruiting-search__submit"));
        await findButton.isDisplayed();
        await findButton.click();
        await browser.sleep(3000);
        const tittleOfFoundVacancy = element(by.css("h1"));
        await tittleOfFoundVacancy.isDisplayed();
    });


})