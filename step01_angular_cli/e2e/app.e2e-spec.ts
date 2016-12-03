import { Step01AngularCliPage } from './app.po';

describe('step01-angular-cli App', function() {
  let page: Step01AngularCliPage;

  beforeEach(() => {
    page = new Step01AngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
