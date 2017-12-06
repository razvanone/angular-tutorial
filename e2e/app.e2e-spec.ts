import { AppPage } from './app.po';

describe('Angular Tutorial App main test file:', () => {
  let page: AppPage;
  const websiteTitle = 'Tour of Heroes';

  beforeEach(() => {
    page = new AppPage();
  });

  it(`Should map '/' to '/dashboard'.`, () => {
    expect(page.navigateTo('/')).toEqual(page.navigateTo('/dashboard'));
  });

  it(`Should display the website title as ${websiteTitle}.`, () => {
    page.navigateTo('/');
    page.waitMilliseconds(2000);

    expect(page.getH1ParagraphText()).toEqual(`${websiteTitle}`);
  });

  it('should have the Dashboard and Heroes links', () => {
    page.navigateTo('/');
    page.waitMilliseconds(2000);

    expect(page.getLinkNameByIndex(0)).toContain('/dashboard');
    expect(page.getLinkNameByIndex(1)).toContain('/heroes');
  });
});
