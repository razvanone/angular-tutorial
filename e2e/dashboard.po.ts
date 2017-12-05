import { browser, by, element } from 'protractor';

export class DashboardPage {
  navigateTo(linkName: string) {
    return browser.get(linkName);
  }

  getH1ParagraphText() {
    return element(by.css('my-app h1')).getText();
  }

  getLinkUrlByIndex(index: number) {
    return element.all(by.css('my-app nav a')).get(index).getAttribute('href');
  }
}
