import { AppPage } from './app.po';

describe('second-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });

  it('should have the Dashboard and Heroes links', () => {
    page.navigateTo();
    expect(page.getLinkUrlByIndex(0)).toContain('/dashboard');
    expect(page.getLinkUrlByIndex(1)).toContain('/heroes');
  });
});
