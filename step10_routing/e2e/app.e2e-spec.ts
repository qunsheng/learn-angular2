import { Step10RoutingPage } from './app.po';

describe('step10-routing App', function() {
  let page: Step10RoutingPage;

  beforeEach(() => {
    page = new Step10RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
