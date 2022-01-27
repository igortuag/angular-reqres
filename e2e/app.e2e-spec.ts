import { AngularReqresPage } from './app.po';

describe('angular-reqres App', () => {
  let page: AngularReqresPage;

  beforeEach(() => {
    page = new AngularReqresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
