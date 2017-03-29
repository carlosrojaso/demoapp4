import { AngularhttpPage } from './app.po';

describe('angularhttp App', () => {
  let page: AngularhttpPage;

  beforeEach(() => {
    page = new AngularhttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
