import { RenotePage } from './app.po';

describe('renote App', () => {
  let page: RenotePage;

  beforeEach(() => {
    page = new RenotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
