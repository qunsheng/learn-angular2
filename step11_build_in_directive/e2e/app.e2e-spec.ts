import { Step11BuildInDirectivePage } from './app.po';

describe('step11-build-in-directive App', function() {
  let page: Step11BuildInDirectivePage;

  beforeEach(() => {
    page = new Step11BuildInDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
