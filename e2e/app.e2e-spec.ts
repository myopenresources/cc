import { CcPage } from './app.po';

describe('cc App', () => {
  let page: CcPage;

  beforeEach(() => {
    page = new CcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
