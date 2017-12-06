import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(linkName: string) {
    return browser.get(linkName);
  }

  waitMilliseconds(millis: number) {
    browser.sleep(millis);
  }

  getH1ParagraphText() {
    return element(by.css('my-app h1')).getText();
  }

  getLinkNameByIndex(index: number) {
    return element.all(by.css('my-app nav a')).get(index).getAttribute('href');
  }
}
