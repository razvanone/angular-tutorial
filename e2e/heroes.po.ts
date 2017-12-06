import { browser, by, element, ElementFinder, protractor } from 'protractor';
import { AppPage } from './app.po';

export class HeroesPage extends AppPage {
  clickOnLink(tagsPath: string, index: number) {
    console.log(`Clicking on the link with index ${index}.`);
    this.elementsArray(tagsPath).get(index).click();
    console.log(`Retrieving the current url after clicking on the link with index ${index}.`);

    return browser.getCurrentUrl();
  }

  elementsArray(tagsPath: string) {
    return element.all(by.css(tagsPath));
  }

  elementsArraySize(tagsPath: string) {
    return this.elementsArray(tagsPath).count();
  }

  closureIterTest() {
    this.navigateTo('/heroes');
    const els = element.all(by.css('my-app app-heroes ul.heroes a'));

    els.each(function (link) {
      link.click();
      console.log(browser.getCurrentUrl());
      return browser.getCurrentUrl();
    });
  }

  iterateLinks() {
    this.navigateTo('/heroes');
    // element.all(by.css('my-app app-heroes ul.heroes a')).then(function (listOfHrefElements) {
    //   if  (listOfHrefElements.length  >  0) {
    //     listOfHrefElements[1].getText().then(function  (rez) {
    //       listOfHrefElements[1].click();
    //     });
    //   }
    // });


    // tslint:disable-next-line:max-line-length
    const lista = element.all(by.css('my-app app-heroes ul.heroes a'));

    for (let i = 0; i <= lista.length; i++) {
      lista.get(i).click();
      browser.getCurrentUrl();
      browser.sleep(5000);
      this.navigateTo('/heroes');
    }
    // let randTabel = tabel.all(by.css('tr')).get(0).click();
    // lista.all(by.css('a')).then(function(listElement) {
    //   // console.log(list.length);
    //   if  (listElement.length  >  0) {
    //     for (let i = 0; i <= listElement.length; i++) {
    //       listElement[i].click();
    //       browser.getCurrentUrl();
    //       browser.sleep(5000);
    //     }
    //     // console.log(listElement[0].getAttribute('href'));
    //     // listElement[0].click();
    //     console.log('a');
    //     expect(browser.getCurrentUrl()).toContain('/detail');
    //     // expect(browser.getCurrentUrl()).toContain('/detail');
    //   }

    // });



    // els.filter(function(elem) {
    //   return elem.getAttribute('href').then(function(text) {
    //     console.log('text: ' + text);
    //     return text === 'should click';
    //   });
    // });
  }
}
