import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-app h1')).getText();
  }

  getLinkUrlByIndex(index: number) {
    return element.all(by.css('my-app nav a')).get(index).getAttribute('href');
  }
}
