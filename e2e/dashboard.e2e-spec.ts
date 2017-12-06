import { DashboardPage } from './dashboard.po';

describe('Angular Tutorial App dashboard test file:', () => {
  let page: DashboardPage;
  const websiteTitle = 'Tour of Heroes';

  beforeEach(() => {
    page = new DashboardPage();
  });

  it(`Should display the dashboard page title as ${websiteTitle}.`, () => {
    page.navigateTo('/dashboard');
    page.waitMilliseconds(2000);

    expect(page.getH1ParagraphText()).toEqual(`${websiteTitle}`);
  });

  it('Should have the Dashboard and Heroes links on the dashboard page.', () => {
    page.navigateTo('/dashboard');
    page.waitMilliseconds(2000);

    expect(page.getLinkNameByIndex(0)).toContain('/dashboard');
    expect(page.getLinkNameByIndex(1)).toContain('/heroes');
  });
});
