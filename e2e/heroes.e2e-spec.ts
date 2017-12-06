import { HeroesPage } from './heroes.po';

describe('Angular Tutorial App heroes test file:', () => {
  let page: HeroesPage;
  const websiteTitle = 'Tour of Heroes';

  beforeEach(() => {
    page = new HeroesPage();
  });

  it(`Should display the heroes page title as ${websiteTitle}.`, () => {
    page.navigateTo('/heroes');
    page.waitMilliseconds(2000);

    expect(page.getH1ParagraphText()).toEqual(`${websiteTitle}`);
  });

  it('Should have the Dashboard and Heroes links on the heroes page.', () => {
    page.navigateTo('/heroes');
    page.waitMilliseconds(2000);

    expect(page.getLinkNameByIndex(0)).toContain('/dashboard');
    expect(page.getLinkNameByIndex(1)).toContain('/heroes');
  });

  it('Should successfully navigate all the Heroe links on the heroes page.', () => {
    page.navigateTo('/heroes');

    page.elementsArraySize('my-app app-heroes ul.heroes a').then((sizeOfArray) => {
      console.log(sizeOfArray);
      for (let index = 0; index < sizeOfArray; index++) {
        page.clickOnLink('my-app app-heroes ul.heroes a', index);
        page.waitMilliseconds(2000);
        page.clickOnLink('my-app app-hero-detail div button', 1);
      }
    });

  });
});
