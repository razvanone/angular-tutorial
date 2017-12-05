import { AppPage } from './app.po';

describe('Angular Tutorial App main test file:', () => {
  let page: AppPage;
  const websiteTitle = 'Tour of Heroes';

  beforeEach(() => {
    page = new AppPage();
  });

  it(`Should display the website title as ${websiteTitle}.`, () => {
    page.navigateTo('/');
    expect(page.getH1ParagraphText()).toEqual(`${websiteTitle}`);
  });

  it('should have the Dashboard and Heroes links', () => {
    page.navigateTo('/');
    expect(page.getLinkUrlByIndex(0)).toContain('/dashboard');
    expect(page.getLinkUrlByIndex(1)).toContain('/heroes');
  });
});
