import { EmbsPage } from './app.po';

describe('embs App', function() {
  let page: EmbsPage;

  beforeEach(() => {
    page = new EmbsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
